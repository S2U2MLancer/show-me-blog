# coding=utf-8
from config.environment import *
from selenium import webdriver
from selenium.webdriver.common.by import By

class HomePage():
    # go to homepage
    def getHomePage(self,driver):
        try:
            driver.get(url)
        except Exception as e:
            print(e)

    # quit
    def quitPage(self, driver):
        driver.quit()

if __name__ == "__main__":
    driver = webdriver.Chrome()
    HomePage().getHomePage(driver)
    HomePage().quitPage(driver)