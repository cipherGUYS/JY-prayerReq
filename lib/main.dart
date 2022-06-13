import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return ScreenUtilInit(
      designSize: const Size(1080, 2400),
      builder: (BuildContext c, child) => MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: const HomePage(),
      ),
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  Widget getTextField({required String hint}) {
    return TextField(
      decoration: InputDecoration(
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(30.r),
            borderSide: const BorderSide(color: Colors.transparent, width: 0),
          ),
          enabledBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(30.r),
            borderSide: const BorderSide(color: Colors.transparent, width: 0),
          ),
          filled: true,
          fillColor: Colors.white,
          hintText: hint,
          hintStyle:
              GoogleFonts.poppins(fontWeight: FontWeight.w300, fontSize: 47.sp),
          contentPadding: EdgeInsets.symmetric(horizontal: 28.w)),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromARGB(255, 146, 146, 253),
      appBar: AppBar(
        leading: const IconButton(
          icon: Icon(
            Icons.menu,
            color: Colors.white,
          ),
          onPressed: null,
        ),
        title: Text(
          "JY Prayer Request",
          style: GoogleFonts.poppins(
              fontWeight: FontWeight.w600,
              fontSize: 66.sp,
              color: Colors.white),
        ),
        backgroundColor: const Color.fromARGB(255, 116, 116, 255),
      ),
      body: Padding(
        padding: EdgeInsets.symmetric(horizontal: 92.w),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          SizedBox(
            height: 78.h,
          ),
          Text(
            "Prayer Request",
            style: GoogleFonts.poppins(
                fontWeight: FontWeight.w600,
                fontSize: 112.sp,
                color: Colors.white),
          ),
          SizedBox(
            height: 124.h,
          ),
          getTextField(hint: "Enter your name or type 'believer’"),
          
        ]),
      ),
    );
  }
}
