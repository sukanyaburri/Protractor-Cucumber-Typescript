import { browser, $, element } from "protractor";

export class SearchPageObject {
    public userid: any;
    public password: any;

     constructor() {
        this.userid = $("#email");
        this.password = $("#pass");
        
     }
    
    public loginbtn = $("input[value='Log In']");

    entretext(uid: string){
        this.userid.sendKeys(uid);

    }

    public loginclick(){
        this.loginbtn.click();
    }


}
