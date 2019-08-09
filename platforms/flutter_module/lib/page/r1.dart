import 'package:flutter/material.dart';
import '../router/router.dart';

class Route1 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    const textStyle = TextStyle(fontSize: 16, color: Colors.black);
    return Scaffold(
      appBar: AppBar(
        title: Text('Welcome to Flutter'),
      ),
    );
  }
}
