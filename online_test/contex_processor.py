
from quiz.forms import AuthenticationAjaxForm


def get_contex_data(requset):
    contex = {
        'login_ajax' : AuthenticationAjaxForm()
    }
    return contex