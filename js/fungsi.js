function findstr(str)
{
		$.ajax({
			url: "http://localhost/rest_ci/index.php/FRM01/findstr",
			type: 'get',
			data:"id=" + str,
			success:function(data){
			//alert("success: ");
			//$('#div2').append(data);
			$('#div2').html(data);
			

			}
			
		});

}

function addrows()
{
var nomor;
var MYTXT="";
nomor = document.getElementById("countrow").innerHTML;


MYTXT = MYTXT + '<TR><TD><button type="button" name="cmd0' + nomor + '" ID="ID_COL0' + nomor + '" onclick="RowDel(this,this.id)" >hapus</button></TD>';
MYTXT = MYTXT + '<TD><input type="text" placeholder="COL' + nomor + '" name="COL1' + nomor + '" ID="ID_COL0' + nomor + '" required="required"></TD>';
MYTXT = MYTXT + '<TD><input type="text" placeholder="COL' + nomor + '" name="COL2' + nomor + '" ID="ID_COL0' + nomor + '" required="required"></TD>';
MYTXT = MYTXT + '<TD><input type="text" placeholder="COL' + nomor + '" name="COL3' + nomor + '" ID="ID_COL0' + nomor + '" required="required"></TD></TR>';
$('#addnewgrid').append(MYTXT);
//alert(MYTXT);
//$('#addnewgrid').append('<TR><TD><button type="button" name="cmd0' + nomor + '" ID="ID_COL0' + nomor + '" onclick="RowDel(this,this.id)" >hapus</button></TD>');
//$('#addnewgrid').append('<TD><input type="text" placeholder="COLUMN 1" name="COL' + nomor + '" ID="ID_COL0' + nomor + '" required="required"></TD>');
//$('#addnewgrid').append('<TD><input type="text" placeholder="COLUMN 2" name="COL' + nomor + '" ID="ID_COL0' + nomor + '" required="required"></TD>');
//$('#addnewgrid').append('<TD><input type="text" placeholder="COLUMN 3" name="COL' + nomor + '" ID="ID_COL0' + nomor + '" required="required"></TD></TR>');
nomor++;
$('#countrow').html(nomor);
}

function RowDel(ctl,myid)
{
alert ("MYID = " + myid);
$(ctl).parents("tr").remove();
}