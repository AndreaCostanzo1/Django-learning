from django.shortcuts import render
from .models import Product

# Create your views here.

def home_view(request, *args,**kwargs):
    products = Product.objects.all()
    my_context= {
        "products" : products
    }
    return render(request, "home.html", my_context)
