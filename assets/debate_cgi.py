#!/usr/bin/python

import markov_debate
import cgi, cgitb

cgitb.enable(display=0, logdir="/path/to/logdir")

form = cgi.FieldStorage()

num_lines = form.gettext()
response = markov_debate.banter(num_lines)

print "Content-type:text/html\r\n\r\n"
print "<html>"
print "<head>"
print "<title>Markovify the 2016 Presidential Debate</title>"
print "</head>"
print "<body>"
print "<p>%s</p>" % (response)
print "</body>"
print "</html>"

