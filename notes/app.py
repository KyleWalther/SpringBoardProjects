# This is ym mega note section where i plan to put down examples and tests on how specific things in python work and oporate
from flask import Flask, render_template, redirect, session, jsonify, request
from cool_class import Cool, Kyle, Shawn
# this is an example of importing, we are grabbing all the methods and funcitons froma nother library or file and allowing this specific window to use them.
# for flask to import, we must download it in our main directory file tat contains all the files asociated with this project. Its important to do this in a virtual enviroment first, so we must make a venv file first within python

#                           python3 -m venv venv

# this creates the file and the envirment, now we must activate it

#                           source venv/bin/activate

# now that are file is created and the venv is working, we can install flask

#                           pip3 install flask

# this will install flask for us

# now that flask is imported and installed, we need to add the name that the flask server will look for when runnning the server. 

app = Flask(__name__)

# now that we have flask installed, we are ready to start our server and begin work on making our code. To start our server, enter this line to run flask

#                           FLASK_DEBUG=1 flask run

# Now we can view our pages on the server by using the http:// URL in our console.

# Time to add some routes and work with HTML, we'll start by making a base HTML file containg the HTML boiler plate and a navbar that will be present on all pages.

# the HTML pages we make must be put in a templates folder, this will allow our render_templates method from flask to find the correct hmtl file based on what we specify in out routes.

# now that we have our base.html page set up, we can crerate a route for outr server to display it in the URL.


@app.route("/")
def base_page():

    return render_template("home.html")

# this is the sytax needed to creat the route, the parameter after app.route is the name that displays in the url, the render_template is the actual file your weanting to display

# Making another route for a list of cool friends that will also use a class to define characteristics of the people in the list. 


@app.route("/cool_people")
def cool_people():

    return render_template("cool_people.html", Kyle=Kyle, Shawn=Shawn)

# if we wanted to vivst that page, we would have to manually type in the /cool_people in the url after the server info. Instead, we will make a button inside the nav bar to take us to the page.

# the base.html page should contain

#   {% block content %}   {% endblock %}

# blockquotes that will display the other oages html. this allows us to extend the base.html pagew boiler plate and nav bar on to every page allowing for less repeated code. to extend to toher pages, make sure to add the 
  
#  {% extends 'base.html' %}   

# to bring ove the html and add a 
# {% block title %}Name of page{% endblock %}
#  to display the pages intended use

# now that its properly extended, anything you want the page to show wll need to be within the  {% block content %}   {% endblock %} section as that is where the codde will display within the rest of the extended base.html content.

# now we will make a class for the names of people and there characteristics to then dsiplay there information with jinja

# LOOK IN THE cool_class.py FOLDE FOR INFORMATION


#



































# SOLO LEARN PRAC

breakfast = ['apple','hasbroen','hotdog', 'soup']



def new_breakfast(breakfast, index, food):
    breakfast[index] = food
    return(breakfast)
    
# replacing an a list item based on an index with a new string

    
