#! coding=utf-8
import os,sys
from selenium import webdriver

from utils.checkplantfram import checkos

current_directory = os.path.dirname(os.path.abspath(__file__))
root_path = os.path.abspath(os.path.dirname(current_directory) + os.path.sep + ".")

def getDriver():
    os_sys = checkos()
    if os_sys.lower() == 'windows':
        driver = webdriver.Chrome(root_path + '/resources/chromedriver.exe')
    elif os_sys.lower() == 'linux':
        driver = webdriver.Chrome(root_path + '/resources/chromedriver')
    else:
        driver = webdriver.Chrome(root_path + '/resources/chromedriver')
    return driver

#getDriver()