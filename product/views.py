from django.shortcuts import render

# Create your views here.

def home_view(request, *args,**kwargs):
    my_context= {
        "my_list" : ["element 1", "element 2", "element 3"]
    }
    return render(request, "home.html", my_context)
