#! coding=utf-8
import os,sys
import requests
from contextlib import closing
import zipfile
current_directory = os.path.dirname(os.path.abspath(__file__))
root_path = os.path.abspath(os.path.dirname(current_directory) + os.path.sep + ".")

from utils.checkplantfram import checkos

def __unzip(sou,dst):
    r = zipfile.is_zipfile(sou)
    if r:
        fz = zipfile.ZipFile(sou, 'r')
        for file in fz.namelist():
            fz.extract(file, dst)

def __download(downloadurl):
    with closing(requests.get(downloadurl, stream=True)) as response:
        chunk_size = 1024
        with open(root_path + '/resources/chromedriver.zip', "wb") as file:
            for data in response.iter_content(chunk_size=chunk_size):
                file.write(data)
    __unzip(root_path + '/resources/chromedriver.zip', root_path + "/resources/")
    os.remove(root_path + "/resources/chromedriver.zip")

def downloadDriver():
    os_sys = checkos()
    if os_sys.lower() == 'windows':
        __download("http://npm.taobao.org/mirrors/chromedriver/73.0.3683.68/chromedriver_win32.zip")
    elif os_sys.lower() == 'linux':
        __download("http://npm.taobao.org/mirrors/chromedriver/73.0.3683.68/chromedriver_linux64.zip")
    else:
        __download("http://npm.taobao.org/mirrors/chromedriver/73.0.3683.68/chromedriver_mac64.zip")

#getDriver()