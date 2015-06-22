"""
Necessary settings for local deployment of urbanRadish.
"""

# local imports
from .base import *

# enable debugging support
DEBUG = True

# change the location we upload to in local dev
MEDIA_ROOT = os.path.join(RESOURCES_DIR, 'uploads')
STATIC_ROOT = RESOURCES_DIR

# add django_toolbar to the installed apps
INSTALLED_APPS += ("debug_toolbar", )

# Database
# https://docs.djangoproject.com/en/1.7/ref/settings/#databases
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db', 'urbanRadish.sqlite3'),
    }
}


## end of file ##
