def index():
    with open('./templates/index.html', 'r') as template:
        return template.read()


def blog():
    with open('./templates/blog.html', 'r') as template:
        return template.read()


def css():
    with open('./templates/css/style.css', 'r') as template:
        return template.read()


if __name__ == '__main__':
    print(index(), blog(), sep='\n\n')
