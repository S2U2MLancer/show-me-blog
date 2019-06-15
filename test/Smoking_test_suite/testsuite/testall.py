#!coding=utf-8
import unittest,time,os,sys
from HtmlTestRunner import HTMLTestRunner

current_directory = os.path.dirname(os.path.abspath(__file__))
root_path = os.path.abspath(os.path.dirname(current_directory) + os.path.sep + ".")
sys.path.append(root_path)

from utils.downloaddriver import downloadDriver


test_dir = root_path + "/testcases/"
report_dir = root_path + "/report/"
discover = unittest.defaultTestLoader.discover(test_dir, pattern='test*.py')

if __name__ == "__main__":
        downloadDriver()
        now = time.strftime("%d-%m-%Y-%H-%M-%S")
        Runner = HTMLTestRunner(output=report_dir,report_title="Test report",descriptions="Cases run results: ", verbosity=2)
        Runner.run(discover)
