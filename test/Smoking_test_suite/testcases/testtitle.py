# coding=utf-8
from selenium.webdriver.common.by import By
import unittest

from page.homePage import HomePage
from page.getDriver import getDriver
from config.environment import *
from utils.logfuction import Logger
from selenium.webdriver.chrome.options import Options

logs = Logger()

class gettitle(unittest.TestCase):
    def setUp(self):
        self.driver = getDriver()
        logs.logger.info("start access")
        HomePage().getHomePage(self.driver)
        logs.logger.info("success access")

    def test_gettitle(self):
        logs.logger.info("get title")
        title = self.driver.title
        self.assertEqual(title, titleinfo, msg='title error!')

    def test_getbody(self):
        logs.logger.info("get boody")
        pageBody = self.driver.find_element(By.XPATH, body).text
        self.assertEqual(pageBody, bodyinfo, msg='body error!')

    def tearDown(self):
        HomePage().quitPage(self.driver)

if __name__ == "__main__":
    unittest.main()