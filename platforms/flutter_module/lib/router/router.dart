class Router {
  final String name;
  final String url;
  final String title;
  final Map<String, dynamic> params;

  Router.fromJson(Map<String, dynamic> json)
      : name = json['name'],
        url = json['url'],
        title = json['title'],
        params = json['params'];
}