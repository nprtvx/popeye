// create application
public class Application {
// create name of the app
private String app_name;
// contstructor Application
Application(appname) {
this.app_name = appname;
} // end constructor Application
private class User {
private String username;
private String emailAddress;
// constructir User
User(String name, String emailAddress) {
this.username = name;
this.emailAddress = emailAddress
} // end constructor User
} // end User
// main
public static void main(int... pope) {
// initialized
// check pope
if (!pope) {
System.out.println('no pope', pope);
} // end if
Application app = new Application("AronGum");
app.createAccount("popeye", "popeye");
System.out.println(app.user.username);
} // end main
// create ACCOUNT
private static void createAccount(String name, String email){
User user = User(name, email);
} // end createAccount

} // end Application