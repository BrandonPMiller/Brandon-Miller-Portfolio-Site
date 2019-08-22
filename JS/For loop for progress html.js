const name= ["HTML","CSS", "Bootstrap 4", "Javascript", "Python", "UX", "Project Management", "Agile/Scrum", "Branding", "Copywriting"]
const percentile= [90, 80, 40, 70, 60, 60, 80, 70, 90, 80]

for (i=0; i<11; i++){


document.write("<div class=\"col-sm-1\">\r\n                    <p class=\"text-center\">"+ name[i] + "<\/p>\r\n                <\/div>\r\n                <div class=\"col-sm-11\">\r\n                    <div class=\"progress-custom\">\r\n                        <div class=\"progress\">\r\n                            <div class=\"progress-bar\" role=\"progressbar\" style=\"width:"+ percentile[i] + "%;\" aria-valuenow=\""+ percentile[i] +"\" aria-valuemin=\"0\" aria-valuemax=\"100\"><\/div>\r\n                        <\/div>\r\n                        <div class=\"progress-value\">\r\n                            "+ percentile[i] +"%\r\n                        <\/div>\r\n                    <\/div>\r\n                <\/div>")

}