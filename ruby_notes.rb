# =====================Classes & Instances=================
#------ Fool around with classes in irb----------
irb
require_relative 'lib/file_name.rb'

# -------General notes----------
# OOP is data(the letters in a particular string) and behaviour (capitalize method)
# Make sure they are always using instance variables, or they won't have access outside func.

# ----------Challenge two (vending machine)-----------
# They just need to add a attr_reader and fix the two functions
# For refilling, change the snack_count to a attr_accessor

# -----Advanced-----
# You can move the display function inside the vending machine class, at that point /
# you no longer need to pass in the instance, you run the methods directly on the instance
# of the object.

# ===================Comparison Operator=========================
include Comparable          #Must include this to get access to the comparable module
attr :speed

def initialize(speed)
    @speed = speed
end

def <=>(other)              #Define name as '<=>', then we set the basis of the comparison
    speed <=> other.speed #We are comparing two objects to each other, Ruby can only sort by comparing each object against each other
end

# ================Inheritance and Self========================
# You can write just 'relative' instead of 'require relative'

# -----Question 3----
# In the filter by City, self goes in front of the definition of the method
# A list of restaurants is fed into the method, you do not need to search all restaurants in the class

# ----Question 4----
# Don't forget the super in the methods that need it (esp. the initialize for energy)
# super() is needed if you want an optional initialize paramater, super is calling the parent method\
# so you don't want to pass those args back to the main, as it doesn't use it
