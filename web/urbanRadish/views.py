"""
Describes application level views for urbanRadish
"""

# django imports
from django.views.generic import TemplateView


class Home(TemplateView):
    """
    Render the index template.
    """
    template_name = 'index.html'


## end of file ##
