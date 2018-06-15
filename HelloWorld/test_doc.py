'''
#test to see "get" in action
from mathematicians import simple_get
raw_html = simple_get('https://realpython.com/blog/')
print(len(raw_html))


no_html = simple_get('https://realpython.com/blog/nope-not-gonna-find-it')
print(no_html)


#test for opening and reading html file
from bs4 import BeautifulSoup
raw_html = open('contrived.html').read()
html = BeautifulSoup(raw_html, 'html.parser')
for p in html.select('p'):
    if p['id'] == 'walrus':
        print(p.text)
'''
from jinja2 import Template

t = Template("Hello {{ something }}!")

t.render(something="World")