from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
import time

import pytest

@pytest.mark.usefixtures("driver_init")
class BasicTest:
    pass

class Test_Title_Chrome(BasicTest):
    def test_website_title(self):
        #self.driver.get('file:///Users/zhenglu/Documents/CS297P/Frontend/Win-Win/login.html')
        self.driver.get('http://localhost:8080/')
        self.driver.maximize_window()
        
        expected_title = "Betting Website"

        assert expected_title == self.driver.title

    def test_nav_home_title(self):
        #self.driver.get('file:///Users/zhenglu/Documents/CS297P/Frontend/betting-site/login.html')
        #self.driver.maximize_window()
        
        self.driver.find_element(By.CLASS_NAME, "nav-link").click()
        heading_element = self.driver.find_element(By.CLASS_NAME, "heading")
        
        expected_title = "Betting Site Home Page"

        assert expected_title == heading_element.text
    
    def test_nav_bet_title(self):
        #self.driver.get('file:///Users/zhenglu/Documents/CS297P/Frontend/betting-site/login.html')
        #self.driver.maximize_window()
        
        self.driver.find_element(By.XPATH, "/html/body/header/nav/div/ul[1]/li[2]").click()
        heading_element = self.driver.find_element(By.CLASS_NAME, "heading")
        
        expected_title = "The Games that can bet for now"

        assert expected_title == heading_element.text
    
    def test_nav_bet_corners_title(self):
        #self.driver.get('file:///Users/zhenglu/Documents/CS297P/Frontend/betting-site/login.html')
        #self.driver.maximize_window()
        
        self.driver.find_element(By.XPATH, "/html/body/header/nav/div/ul[1]/li[3]/a").click()
        heading_element = self.driver.find_element(By.CLASS_NAME, "heading")
        
        expected_title = "The Games that can bet on BigSmall for now"

        assert expected_title == heading_element.text
    def test_nav_bet_corners_title(self):
        #self.driver.get('file:///Users/zhenglu/Documents/CS297P/Frontend/betting-site/login.html')
        #self.driver.maximize_window()
        
        self.driver.find_element(By.XPATH, "/html/body/header/nav/div/ul[1]/li[4]/a").click()
        heading_element = self.driver.find_element(By.CLASS_NAME, "heading")
        
        expected_title = "The Games that can bet on Corners for now"

        assert expected_title == heading_element.text
    def test_nav_bet_cards_title(self):
        #self.driver.get('file:///Users/zhenglu/Documents/CS297P/Frontend/betting-site/login.html')
        #self.driver.maximize_window()
        
        self.driver.find_element(By.XPATH, "/html/body/header/nav/div/ul[1]/li[5]/a").click()
        heading_element = self.driver.find_element(By.CLASS_NAME, "heading")
        
        expected_title = "The Games that can bet on Card for now"

        assert expected_title == heading_element.text
    def test_nav_history_title(self):
        #self.driver.get('file:///Users/zhenglu/Documents/CS297P/Frontend/betting-site/login.html')
        #self.driver.maximize_window()
        
        self.driver.find_element(By.XPATH, "/html/body/header/nav/div/ul[1]/li[6]/a").click()
        
        heading_element = self.driver.find_element(By.CLASS_NAME, "heading")
        
        expected_title = "Purchase History"

        assert expected_title == heading_element.text

    def test_nav_aboutus_title(self):
        #self.driver.get('file:///Users/zhenglu/Documents/CS297P/Frontend/betting-site/login.html')
        #self.driver.maximize_window()
        
        self.driver.find_element(By.XPATH, "/html/body/header/nav/div/ul[1]/li[7]/a").click()
        heading_element = self.driver.find_element(By.CLASS_NAME, "heading")
        
        expected_title = "About Our Team"

        assert expected_title == heading_element.text
    
    def test_nav_contactus_title(self):
        #self.driver.get('file:///Users/zhenglu/Documents/CS297P/Frontend/betting-site/login.html')
        #self.driver.maximize_window()
        
        self.driver.find_element(By.XPATH, "/html/body/header/nav/div/ul[1]/li[8]/a").click()
        heading_element = self.driver.find_element(By.CLASS_NAME, "heading")
        
        expected_title = "Contact Us"

        assert expected_title == heading_element.text

class Test_Button_Chrome(BasicTest):  
    
    def test_reset_button(self):
        
        self.driver.get('http://localhost:8080/')
        self.driver.maximize_window()
        
        self.driver.find_element(By.XPATH, "/html/body/header/nav/div/ul[1]/li[2]").click()
        
        amount_input = self.driver.find_element(By.XPATH, "/html/body/div/article/div/div[1]/div[1]/div[5]/form/input")
        amount_input.send_keys(30)

        reset_button = self.driver.find_element(By.XPATH, "/html/body/div/article/div/div[1]/div[1]/div[5]/form/button[2]").click()
        
        assert amount_input.get_attribute("value") == ""

class Test_Login_Chrome(BasicTest):
    def test_success_login_(self):
        self.driver.get('http://localhost:8080/')
        self.driver.maximize_window()

        self.driver.find_element(By.XPATH, "/html/body/header/nav/div/ul[1]/li[9]/a").click()

        email_input = self.driver.find_element(By.XPATH, "/html/body/div/form[1]/div[2]/input")
        email_input.send_keys("kevin1998@gmail.com")

        password_input = self.driver.find_element(By.XPATH, "/html/body/div/form[1]/div[3]/input")
        password_input.send_keys("kevin1998")

        login_button = self.driver.find_element(By.XPATH, "/html/body/div/form[1]/button").click()

        self.driver.implicitly_wait(10)
