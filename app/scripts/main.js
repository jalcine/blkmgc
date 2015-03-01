'use strict';

$(function blkMgc() {
    var blackPeopleData = [
        {'name':'George Edward Alcorn, Jr.', 'img': 'http://www.cpnas.org/aahp/biographies/primary-biography-photos/alcorn_george.jpg'},
        {'name':'Miriam Benjamin', 'img': 'http://www.panafa.net/fileadmin/maateducation/inventors/BenjaminMiriam.jpg'},
        {'name':'Patricia Bath', 'img': 'https://hellarreviews.files.wordpress.com/2013/07/patricia-bath.jpg'},
        {'name':'Andrew Jackson Beard', 'img': 'https://duckduckgo.com/l/?kh=-1&uddg=http%3A%2F%2Fwww.famous-black-inventors.net%2Fwp-content%2Fuploads%2F2012%2F05%2Fandrew-jackson-beard.jpg'},
        {'name':'Miriam Benjamin', 'img': 'http://farm1.static.flickr.com/44/160208871_b374b47e7f.jpg'},
        {'name':'Donna Auguste', 'img': 'http://www.girlgeeks.org/innergeek/inspiringwomen/images/auguste.gif'},
        {'name':'Annie J Easley', 'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/NASA_Science_and_Engineering_Newsletter_Annie_Easley.jpg/220px-NASA_Science_and_Engineering_Newsletter_Annie_Easley.jpg'},
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
