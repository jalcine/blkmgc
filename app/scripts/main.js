'use strict';

$(function blkMgc() {
    var blackPeopleData = [
        {'name':'George Edward Alcorn, Jr.', 'img': 'http://www.cpnas.org/aahp/biographies/primary-biography-photos/alcorn_george.jpg'},
        {'name':'Patricia Bath', 'img': ''},
        {'name':'Andrew Jackson Beard', 'img': ''},
        {'name':'Miriam Benjamin', 'img': 'http://www.panafa.net/fileadmin/maateducation/inventors/BenjaminMiriam.jpg'},
        {'name':'Henry Blair (inventor)', 'img': 'https://bernasvibethewayiseeit.files.wordpress.com/2014/02/henry-blair.jpg'},
        {'name':'Bessie Blount Griffin', 'img': 'http://www.aaregistry.org/aareg_files/event_images/BessieBlount1951France.gif'},
        {'name':'Sarah Boone', 'img': 'http://www.slidepoint.net/users/hhtp/_images/hhuu/sarah_boone%5B2%5D.jpg'},
        {'name':'Otis Boykin', 'img': 'https://upload.wikimedia.org/wikipedia/commons/4/43/Boykins_at_Dept_of_Energy_BLACK_CONTRIBUTORS_TO_SCIENCE_AND_ENERGY_TECHNOLOGY_Page_08.jpg'}
    ];

    var fields = $('.box');
    fields.each(function(i, elem){
        var name = blackPeopleData[i].name;
        var img = blackPeopleData[i].img;
        $(elem).css('background-image', "url('"+img+"')");
        $(elem).attr('title', name);
    });
});
