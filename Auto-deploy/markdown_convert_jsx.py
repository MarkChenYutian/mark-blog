import regex as re
import os
import html
import markdown

simple_html2JSX_RuleSet = {
    "<h1>" : "<Title level={2}>",
    "<h2>" : "<Title level={3}>",
    "<h3>" : "<Title level={4}>",
    "<h4>" : "<Title level={5}>",
    "</h1>" : "</Title>",
    "</h2>" : "</Title>",
    "</h3>" : "</Title>",
    "</h4>" : "</Title>",
    "</h5>" : "</Title>",
    "<p>" : "<Paragraph>",
    "</p>" : "</Paragraph>",
    "<strong>" : "<Text strong>",
    "</strong>" : "</Text>",
    "<code>" : "<Text code>",
    "</code>" : "</Text>",
    "<blockquote>" : "<Paragraph type=\"secondary\">",
    "</blockquote>" : "</Paragraph>",
    "<hr />" : "<Divider></Divider>"
}

unescapeRules = {

}

unescapeJSXRules = {
    ">" : "{'>'}",
    "<" : "{'<'}",
    "\t" : "\\t",
    "\r" : "\\r",
    "\b" : "\\b",
    "\a" : "\\a"
}

def unescapeString(htmlString:str, unescapeRules):
    for key in unescapeRules:
        htmlString = htmlString.replace(key, unescapeRules[key])
    return htmlString


def Html2JSX_SimpleReplace(htmlString:str, simple_html2JSX_RuleSet:dict):
    for key in simple_html2JSX_RuleSet:
        try:
            htmlString = htmlString.replace(key, simple_html2JSX_RuleSet[key])
            print("OK  |  {} ---> {}".format(key, simple_html2JSX_RuleSet[key]))
        except:
            print("FAIL|  {} ---> {}".format(key, simple_html2JSX_RuleSet[key]))
    return htmlString

def Image2JSX(htmlString):
    try:
        while re.search(r"<img (.*) src=\"(.*)\"([. ]*)/>", htmlString, re.I) is not None:
            imageRegex = re.search(r"<img (.*) src=\"(.*)\"([. ]*)/>", htmlString, re.I)
            imageSpan = imageRegex.span()
            imageProps = htmlString[imageSpan[0] + 4:imageSpan[1] - 2].strip()
            imageProps += " width='30%' style={{minWidth: '250px'}}"
            imageProps += " fallback={FailImage}"
            htmlString = re.sub(r"<img (.*) src=\"(.*)\"([. ]*)/>", "<Image {} />".format(imageProps), htmlString, 1)
        print("OK  |  <img/> ---> <Image />")
    except:
        print("FAIL|  <img/> ---> <Image />")
    return htmlString

def InlineKaTeX2JSX(htmlString):
    try:
        while re.search(r'[$]{1}.+?[$]{1}', htmlString) is not None:
            inlineMathRe = re.search(r'[$]{1}.+?[$]{1}', htmlString)
            inlineMathSpan = inlineMathRe.span()
            mathString = r"{}".format(htmlString[inlineMathSpan[0] + 1 : inlineMathSpan[1] - 1])
            mathString = unescapeString(mathString, unescapeRules)
            subString = "<InlineMath math='{}'/>".format(mathString)
            htmlString = htmlString.replace(inlineMathRe.group(0), subString)
        print("OK  |  $ ... $ ---> <InlineMath />")
    except:
        print("FAIL|  $ ... $ ---> <InlineMath />")
    return htmlString

def BlockKaTeX2JSX(htmlString):
    try:
        while re.search(r'[$]{2}.*?[$]{2}', htmlString, re.S) is not None:
            blockMathRe = re.search(r'[$]{2}.*?[$]{2}', htmlString, re.S)
            blockMathSpan = blockMathRe.span()
            mathString = r"{}".format(htmlString[blockMathSpan[0] + 2 : blockMathSpan[1] - 2])
            mathString = unescapeString(mathString, unescapeRules)
            subString = "<BlockMath math='{}'/>".format(mathString)
            htmlString = htmlString.replace(blockMathRe.group(0), subString)
        print("OK  |  $$ ... $$ ---> <BlockMath />")
    except:
        print("FAIL|  $$ ... $$ ---> <BlockMath />")
    return htmlString

def codeRemoveHead(childrenStr):
    headRegex = r"<pre><code.*?>"
    childrenStr = re.sub(headRegex, "", childrenStr, 1)
    return childrenStr

def codeBlockFeatureExtract(regexObject, htmlStr):
    codeStr = htmlStr[regexObject.span()[0]:regexObject.span()[1]]
    languageRe = re.search(r"language.*?>", codeStr)
    if languageRe is None: return None
    language = codeStr[languageRe.span()[0] + 9:languageRe.span()[1] - 2]
    return language

def CodeBlock2JSX(htmlString):
    patternRegex = r"<pre><code.*?>.*?</code></pre>"
    try:
        while re.search(patternRegex, htmlString, re.S) is not None:
            CodeBlockRe = re.search(patternRegex, htmlString, re.S)

            language = codeBlockFeatureExtract(CodeBlockRe, htmlString)

            CodeBlockSpan = CodeBlockRe.span()
            codeString = codeRemoveHead(htmlString[CodeBlockSpan[0]: CodeBlockSpan[1] - 13])
            result = "<SyntaxHighlighter style={lightfair}"
            if language is not None:
                print("OK  | Codeblock Detected, language recognized as {}".format(language))
                result += " language={'"+language+"'}"
            result += " children={`\n"
            result += codeString
            result += "`}/>"
            htmlString = re.sub(patternRegex, result, htmlString, 1, flags=re.S)
        print("OK  | <Paragraph><code> ... </code></Paragraph> ---> <SyntaxHighlighter/>")
    except:
        print("FAIL| <Paragraph><code> ... </code></Paragraph> ---> <SyntaxHighlighter/>")
    return htmlString

def Markdown2JSX(mdFilePath):
    with open(mdFilePath, 'r') as markdownFile:
        mdString = markdownFile.read()
        htmlString = markdown.markdown(mdString, extensions=['fenced_code'])
        # htmlString = unescapeString(htmlString, unescapeJSXRules)

    htmlString = html.unescape(htmlString)
    print("===== Parsing HTML 2 JSX Pipeline Begin =====")
    htmlString = CodeBlock2JSX(htmlString)
    htmlString = Html2JSX_SimpleReplace(htmlString, simple_html2JSX_RuleSet)
    htmlString = Image2JSX(htmlString)
    htmlString = BlockKaTeX2JSX(htmlString)
    htmlString = InlineKaTeX2JSX(htmlString)
    print("======= Markdown2JSX Parsing Finished =======")
    print("")
    return htmlString

################# Convert the Markdown to JSX ###################

def write_JSX(ProjectName, TitleName, MDPath):
    JSX_File_Import = [
        "import React from 'react';",
        "import '../../App.css';",
        "import 'moment/locale/zh-cn';",
        "import 'antd/dist/antd.css';",
        "import '../../index.css';",
        "import { Image, Layout, PageHeader, Typography, Space, Tag, Divider } from 'antd';",
        "import ReactMarkdown from 'react-markdown';",
        "import math from 'remark-math';",
        "import { InlineMath, BlockMath } from 'react-katex';",
        "import 'katex/dist/katex.min.css';",
        "import SyntaxHighlighter from 'react-syntax-highlighter';",
        "import { lightfair } from 'react-syntax-highlighter/dist/esm/styles/hljs';",
        "import AppHeader from '../../PublicComponent/Header';",
        "import AppFooter from '../../PublicComponent/Footer';",
        "import FailImage from '../../PublicComponent/FailImage';",
        "import AppPageHeader from '../../PublicComponent/PageHeader';"
    ]

    constDefineLines = [
        "const { Title, Text, Paragraph } = Typography;",
        "const { Content } = Layout;",
        "const PhotoLink = process.env.PUBLIC_URL + '/Assets/';\n"
    ]
    ReactTemplate = [
    r"function {}(props)".format(ProjectName) + "{",
    r"   window.scrollTo(0,0);",
    r"   return(",
    r"       <Layout>",
    r"           <AppHeader select='2'/>",
    r"           <Content className='site-layout' style={{ padding: '0 24px', marginTop: 64 }}>",
    r"           <AppPageHeader title='{}'/>".format(TitleName),
    r"           <div className='site-layout-background' style={{ padding: 16 }}>",
    r"              <PostContent/>",
    r"           </div>",
    r"           </Content>",
    r"           <AppFooter/>",
    r"        </Layout>",
    r"   );",
    r"}",
    r"export default {};".format(ProjectName)
    ]

    Template = str()
    Template += "\n".join(JSX_File_Import)
    Template += "\n".join(constDefineLines)
    Template += "\n".join(ReactTemplate)

    JSXPost = Markdown2JSX(MDPath)

    JSXPost = "<Layout style={{ backgroundColor: 'white', padding: '0'}}>\n" + JSXPost + "\n" + "</Layout>"

    Template += "\n"
    Template += "function PostContent(){\n return("
    Template += JSXPost
    Template += "\n);}"

    return Template