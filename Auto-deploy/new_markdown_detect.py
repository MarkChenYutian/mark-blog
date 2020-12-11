"""
This file act as a listener for the folder md_Posts. To run this file, you need to run from workspace "mark-blog" instead of "mark-blog/auto-deploy"
"""
import os
import warnings
import os.path as path
import re
import hashlib
import pickle

class fileSelector:
    def __init__(self, FolderPath, type="md"):
        self.folderPath = FolderPath
        if "fileSelectorCache_{}.pkl".format(type) in os.listdir("./Auto-deploy"):
            try:
                cache = open("./Auto-deploy/fileSelectorCache_{}.pkl".format(type), "rb")
                self.processedFilePath, self.processedFileMD5 = pickle.load(cache)
            except:
                warnings.warn("Cache is detected, but we FAILED TO READ CACHE, the processed record is EMPTY NOW.")
        else:
            self.processedFileMD5 = set()
            self.processedFilePath = set()
        
        self.type = type
        self.indexFilePath = set()
        self.indexFileMD5 = set()

        self.usacoFileFilter = fileFilter(type)
    
    def checkIsRepeatFile(self, FilePath: str):
        fileMD5 = getFileMD5(FilePath)
        return fileMD5 in self.processedFileMD5
    
    def checkIsRepeatPath(self, FilePath: str):
        return FilePath in self.processedFilePath
    
    def checkIsProcessed(self, FilePath: str):
        '''
        return true if the file is uploaded to Google Drive, false otherwise
        '''
        if not self.checkIsRepeatPath(FilePath):
            return self.checkIsRepeatFile(FilePath)
        return True
    
    def getAllFilePath(self, FilePath):
        if path.isdir(FilePath):
            result = []
            try:
                subFiles = os.listdir(FilePath)
                for subFile in subFiles:
                    result += self.getAllFilePath(path.join(FilePath, subFile))
            except:
                raise Warning("Access Denied: can't access files under this Dir: {}, we will not process this".format(FilePath))
            return result
        else:
            # What will actually return the file path back
            if self.usacoFileFilter(FilePath): return [FilePath]
            return []

    def __call__(self):
        result = []
        relativeFiles = self.getAllFilePath(self.folderPath)
        for file in relativeFiles:
            if not self.checkIsProcessed(file):
                result.append(file)
                self.indexFilePath.add(file)
                self.indexFileMD5.add(getFileMD5(file))
        return result
    
    def uploadFinish(self):
        self.processedFileMD5 = self.indexFileMD5.union(self.processedFileMD5)
        self.processedFilePath = self.indexFilePath.union(self.processedFilePath)

    def updateCache(self):
        cache = open("./Auto-deploy/fileSelectorCache_{}.pkl".format(self.type), "wb")
        pickle.dump([self.processedFilePath, self.processedFileMD5], cache)

class fileFilter:
    def __init__(self, type):
        # 如果想要更多正则规则可以直接在这里加上，注意这里每一条正则之间是 AND 关系的

        if type == "md": fileRe1 = r".*?md"
        elif type=="html": fileRe1 = r".*?html"
        else:
            warnings.warn("fileFilter object get unknown type code of {}, we will use typecode 'md' instead.".format(type))
            fileRe1 = r".*?md"

        self.TitleRegexs = [
            fileRe1
        ]
        self.ContentRegexs = [
            
        ]

    def __call__(self, FilePath):
        return self.CheckRelatedName(FilePath) and self.CheckRelatedContent(FilePath)

    def CheckRelatedName(self, FilePath):
        fileName = path.split(FilePath)[1]
        fileName.upper()
        for regexCheck in self.TitleRegexs:
            if re.search(regexCheck, fileName) is None: return False
        return True

    def CheckRelatedContent(self, FilePath):
        with open(FilePath, "r") as File: content = File.read()
        for regexCheck in self.ContentRegexs:
            if re.search(regexCheck, content) is None: return False
        return True

def getFileMD5(FilePath):
        try:
            with open(FilePath, 'rb') as newfile: filedata = newfile.read()
        except:
            raise Warning("Unable to read file from file path: {} , we will overlook this file.".format(FilePath))
        return hashlib.md5(filedata).hexdigest()


if __name__ =="__main__":
    print(os.getcwd())
    test = fileSelector("./md_Posts", type="html")
    print(test())
    test.uploadFinish()
    test.updateCache()
