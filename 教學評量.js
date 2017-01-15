
http://140.127.113.155/Questionnaire/QuestionnaireInsert.aspx?UserId=E60E58DD8C7038E38042DC401A4315F9

(function aaa(){

    // Your code here...

    var i;
    for(i = 0;i < 14; i++)
    {
        if(i == 5 || i == 4)
        {
            $("#ContentPlaceHolder1_GridViewContent_RadioButtonList1_"+i+"_2_"+i).click();
        }
        else if(i == 6)
        {
            $("#ContentPlaceHolder1_GridViewContent_CheckBoxList1_6_0_6").click();
        }
        else if(i == 11 || i == 13)
        {
            $("#ContentPlaceHolder1_GridViewContent_RadioButtonList1_"+i+"_3_"+i).click();
        }
        else if(i != 7)
        {
            $("#ContentPlaceHolder1_GridViewContent_RadioButtonList1_"+i+"_0_"+i).click();
        }
    }
    $("#ContentPlaceHolder1_ButtonSend").click();
})();