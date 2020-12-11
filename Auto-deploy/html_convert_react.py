def html_to_React(ProjectName, TitleName, filePath):
    JSX_File_Import = [
        "import React from 'react';",
        "import '../../App.css';",
        "import 'moment/locale/zh-cn';",
        "import 'antd/dist/antd.css';",
        "import '../../index.css';",
        "import { Image, Layout, PageHeader, Typography, Space, Tag, Divider } from 'antd';",
        "import 'katex/dist/katex.min.css';",
        "import './TyporaGithub.css'",
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
    r"              <div dangerouslySetInnerHTML={{__html:html_Content}}></div>",
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

    with open(filePath, "r") as inFile:
        htmlString = inFile.read()

    Template += "\n\nconst html_Content=`\n" + htmlString + "\n`"

    return Template