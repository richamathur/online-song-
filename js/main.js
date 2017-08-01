        $('.cover button').on('click', function() {
            var name = $('#name-input').val();
            //var pass = $('#password-input').val();//password ki string check krne k liye
            //if(name === "test@acadview.com" && pass === "JavascriptRocks")//Check kiya ki strings equal hai ya nhi
            if(name.length > 3)//user gets access only if username input value is greater than or equal to 2 
            {

                var message = "Welcome, " + name;
                $('.main .user-name').text(message);
                $('.cover').addClass('hidden');
                $('.main').removeClass('hidden');
            }
            else
            {
                $('#name-input').removeClass('name-inp').addClass('error');
                //$('#password-input').addClass('error');
                alert("ERROR!!\nUsername should have more than 3 characters");
            }
        });

        var currentSongNumber = 1;
        var willLoop = 0;
        var willShuffle = 0;

        //function to manage the play and pause interface using the fontawesome icons
        function toggleSong(){
            var song = document.querySelector('audio');
            if (song.paused == true) {
                $('.play-icon').removeClass('fa-play').addClass('fa-pause');//removes play icon and adds pause icon
                song.play();
            } 
            else {
                $('.play-icon').removeClass('fa-pause').addClass('fa-play');//removes pause icon and adds play icon
                song.pause();
            }
        }

        $('.play-icon').on('click', function() {
            toggleSong();
        });

        //function to manage the play and pause functionality using the spacebar(keyboard keys)
        $('body').on('keypress',function(event){
            var target = event.target;
            if(event.keyCode == 32 && target.tagName!='INPUT') 
            //spacebar key holds value 32
            {
                toggleSong();
            }
        });
        
    
        //made an object and stored the complete info about all the songs
        //var allSongs=[songs1,songs2]//,songs3,songs4,songs5,songs6,songs7,songs8];
        //songs=[0,1,2,3];
        var songs = [{
                'name': 'Buddhu Sa Mann Hai',
                'artist': 'Amaal Malik, Armaan Malik',
                'album': 'Kapoor & Sons',
                'duration': '3:26',
               'fileName': 'song1.mp3',
               'image' : 'song1.jpg'
            },
            {
                'name': 'Jaaniya O Jaaniya',
                'artist': 'Sidharth Basrur',
                'album': 'Haunted',
                'duration': '5:07',
                'fileName': 'song2.mp3',
                'image' : 'song2.jpg'
            },
            {
                'name': 'Safarnama',
                'artist': 'Lucky Ali',
                'album': 'Tamasha',
                'duration': '4:11',
                'fileName': 'song3.mp3',
                'image' : 'song3.jpg'
            },
            {
                'name': 'Why Not Me',
                'artist': 'Enrique Iglesias',
                'album': 'Euphoria',
                'duration': '3:38',
                'fileName': 'song4.mp3',
                'image' : 'song4.jpg'
            }]
            //click ke accordingly playlist change hoti h
        var mood1=document.querySelector('.mood1');
        mood1.addEventListener('click',function(){
            //baaki saari detailing hide krke intented detail show krna
            $('.main').removeClass('main2')
            $('.main').removeClass('main3')
            $('.main').removeClass('main4')
            $('.main').removeClass('main5')
            $('.main').removeClass('main6')
            $('.main').removeClass('main7')
            $('.main').removeClass('main8')
            $('.main').addClass('main1')
            //songs object ko override kia songs1 se
            //first playlist
        songs = songs1 = [{
                'name': 'Buddhu Sa Mann Hai',
                'artist': 'Amaal Malik, Armaan Malik',
                'album': 'Kapoor & Sons',
                'duration': '3:26',
               'fileName': 'song1.mp3',
               'image' : 'song1.jpg'
            },
            {
                'name': 'Jaaniya O Jaaniya',
                'artist': 'Sidharth Basrur',
                'album': 'Haunted',
                'duration': '5:07',
                'fileName': 'song2.mp3',
                'image' : 'song2.jpg'
            },
            {
                'name': 'Safarnama',
                'artist': 'Lucky Ali',
                'album': 'Tamasha',
                'duration': '4:11',
                'fileName': 'song3.mp3',
                'image' : 'song3.jpg'
            },
            {
                'name': 'Why Not Me',
                'artist': 'Enrique Iglesias',
                'album': 'Euphoria',
                'duration': '3:38',
                'fileName': 'song4.mp3',
                'image' : 'song4.jpg'
            }]
            var audio =document.querySelector('audio')
            audio.src=songs1[0].fileName
            //mood ko select krne k turant baad playlist mey pehla song initiate hojayega
            toggleSong();
            splfunction();
        });
        var mood2=document.querySelector('.mood2');
        mood2.addEventListener('click',function(){
            //baaki saari detailing hide krke intented detail show krna
            $('.main').removeClass('main1')
            $('.main').removeClass('main3')
            $('.main').removeClass('main4')
            $('.main').removeClass('main5')
            $('.main').removeClass('main6')
            $('.main').removeClass('main7')
            $('.main').removeClass('main8')
            $('.main').addClass('main2')
        songs = songs2 =[{  
                        'name': 'Channa Mereya',
                       'artist': 'Arijit Singh',
                       'album': 'Ae Dil Hai Mushkil',
                       'duration': '4:49',
                       'fileName': 'song5.mp3',
                       'image' : 'song5.jpg'
                },
                {    'name': 'Phir Bhi Tumko Chahunga',
                     'artist': 'Arijit Singh',
                     'album': 'Half Girlfriend',
                     'duration': '5:51',
                     'fileName': 'song6.mp3',
                     'image' : 'song6.jpg'
                },
                    {'name': 'Dhuaan Dhuaan',
                'artist': 'Arijit Singh',
                'album': 'Fugly',
                'duration': '3:40',
                'fileName': 'song7.mp3',
                'image' : 'song7.jpg'
            },
            {
                'name': 'Why Not Me',
                'artist': 'Enrique Iglesias',
                'album': 'Euphoria',
                'duration': '3:38',
                'fileName': 'song4.mp3',
                'image' : 'song4.jpg'
            }]
            var audio =document.querySelector('audio')
            audio.src=songs2[0].fileName
            toggleSong();
            splfunction();
        });
        var mood3=document.querySelector('.mood3');
        mood3.addEventListener('click',function(){
            //baaki saari detailing hide krke intented detail show krna
            $('.main').removeClass('main2')
            $('.main').removeClass('main1')
            $('.main').removeClass('main4')
            $('.main').removeClass('main5')
            $('.main').removeClass('main6')
            $('.main').removeClass('main7')
            $('.main').removeClass('main8')
            $('.main').addClass('main3')
        songs = songs3 =[{  'name': 'Darkhaast',
                       'artist': 'Arijit Singh,Sunidhi Chouhan',
                       'album': 'Shivaay',
                       'duration': '6:14',
                       'fileName': 'song9.mp3',
                       'image' : 'song9.jpg'
                },
                {    'name': 'Mera Pehla Pehle Pyaar',
                     'artist': '--',
                     'album': 'Mera Pehla Pehle Pyaar',
                     'duration': '4:31',
                     'fileName': 'song10.mp3',
                     'image' : 'song10.jpg'
                },
                    {'name': 'Aye Dil Bata',
                'artist': 'Arijit Singh',
                'album': 'Ishq Actually',
                'duration': '5:42',
                'fileName': 'song11.mp3',
                'image' : 'song11.jpg'
            },
            {
                'name': 'Jaaniya O Jaaniya',
                'artist': 'Sidharth Basrur',
                'album': 'Haunted',
                'duration': '5:07',
                'fileName': 'song2.mp3',
                'image' : 'song2.jpg'
            }]    
            var audio =document.querySelector('audio')
            audio.src=songs3[0].fileName
            toggleSong();
            splfunction();
        });
        var mood4=document.querySelector('.mood4');
        mood4.addEventListener('click',function(){
            //baaki saari detailing hide krke intented detail show krna
            $('.main').removeClass('main1')
            $('.main').removeClass('main3')
            $('.main').removeClass('main2')
            $('.main').removeClass('main5')
            $('.main').removeClass('main6')
            $('.main').removeClass('main7')
            $('.main').removeClass('main8')
            $('.main').addClass('main4')
        songs = songs4 =[{
                'name': 'Safarnama',
                'artist': 'Lucky Ali',
                'album': 'Tamasha',
                'duration': '4:11',
                'fileName': 'song3.mp3',
                'image' : 'song3.jpg'
            },
                {  'name': 'Darkhaast',
                       'artist': 'Arijit Singh,Sunidhi Chouhan',
                       'album': 'Shivaay',
                       'duration': '6:14',
                       'fileName': 'song9.mp3',
                       'image' : 'song9.jpg'
                },
                    {'name': 'Aye Dil Bata',
                'artist': 'Arijit Singh',
                'album': 'Ishq Actually',
                'duration': '5:42',
                'fileName': 'song11.mp3',
                'image' : 'song11.jpg'
            },
            {
                'name': 'Why Not Me',
                'artist': 'Enrique Iglesias',
                'album': 'Euphoria',
                'duration': '3:38',
                'fileName': 'song4.mp3',
                'image' : 'song4.jpg'
            }]    
            var audio =document.querySelector('audio')
            audio.src=songs4[0].fileName
            toggleSong();
            splfunction();
        });
        var mood5=document.querySelector('.mood5');
        mood5.addEventListener('click',function(){
            //baaki saari detailing hide krke intented detail show krna
            $('.main').removeClass('main2')
            $('.main').removeClass('main3')
            $('.main').removeClass('main4')
            $('.main').removeClass('main1')
            $('.main').removeClass('main6')
            $('.main').removeClass('main7')
            $('.main').removeClass('main8')
            $('.main').addClass('main5')
        songs = songs5 =[{  'name': 'Russian Roulette',
                       'artist': 'Rihanna',
                       'album': 'Loud',
                       'duration': '3:47',
                       'fileName': 'song17.mp3',
                       'image' : 'song17.jpg'
                },
                {    'name': 'Rockabye Baby',
                     'artist': 'Clean Bandit',
                     'album': 'Rockabye',
                     'duration': '4:13',
                     'fileName': 'song18.mp3',
                     'image' : 'song18.jpg'
                },
                {'name': 'Despacito (TEGOS.RU)',
                'artist': 'Louis Fonsi, Daddy Yankee',
                'album': 'TEGOS.RU',
                'duration': '3:47',
                'fileName': 'song20.mp3',
                'image' : 'song20.jpeg'    
            },
            {    'name': 'Rockabye Baby',
                     'artist': 'Clean Bandit',
                     'album': 'Rockabye',
                     'duration': '4:13',
                     'fileName': 'song18.mp3',
                     'image' : 'song18.jpg'
                }]    
            var audio =document.querySelector('audio')
            audio.src=songs5[0].fileName
            toggleSong();
            splfunction();
        });
        var mood6=document.querySelector('.mood6');
        mood6.addEventListener('click',function(){
            //baaki saari detailing hide krke intented detail show krna
            $('.main').removeClass('main1')
            $('.main').removeClass('main3')
            $('.main').removeClass('main4')
            $('.main').removeClass('main5')
            $('.main').removeClass('main2')
            $('.main').removeClass('main7')
            $('.main').removeClass('main8')
            $('.main').addClass('main6')
        songs = songs6 =[{
                'name': 'Safarnama',
                'artist': 'Lucky Ali',
                'album': 'Tamasha',
                'duration': '4:11',
                'fileName': 'song3.mp3',
                'image' : 'song3.jpg'
            },
                {
                'name': 'Why Not Me',
                'artist': 'Enrique Iglesias',
                'album': 'Euphoria',
                'duration': '3:38',
                'fileName': 'song4.mp3',
                'image' : 'song4.jpg'
            },
                    {'name': 'Aye Dil Bata',
                'artist': 'Arijit Singh',
                'album': 'Ishq Actually',
                'duration': '5:42',
                'fileName': 'song11.mp3',
                'image' : 'song11.jpg'
            },
            {
                'name': 'Why Not Me',
                'artist': 'Enrique Iglesias',
                'album': 'Euphoria',
                'duration': '3:38',
                'fileName': 'song4.mp3',
                'image' : 'song4.jpg'
            }]    
            var audio =document.querySelector('audio')
            audio.src=songs6[0].fileName
            toggleSong();
            splfunction();
        });
        var mood7=document.querySelector('.mood7');
        mood7.addEventListener('click',function(){
            //baaki saari detailing hide krke intented detail show krna
            $('.main').removeClass('main2')
            $('.main').removeClass('main3')
            $('.main').removeClass('main4')
            $('.main').removeClass('main5')
            $('.main').removeClass('main6')
            $('.main').removeClass('main1')
            $('.main').removeClass('main8')
            $('.main').addClass('main7')
        songs = songs7 =[{  'name': 'Mera Dil Bhi Kitna Pagal Hai',
                       'artist': 'Kumar Sanu,Alka Yagnik',
                       'album': 'Saajan',
                       'duration': '5:26',
                       'fileName': 'song25.mp3',
                       'image' : 'song25.jpg'
                },
                {    'name': 'Mera Pehla Pehle Pyaar',
                     'artist': '--',
                     'album': 'Mera Pehla Pehle Pyaar',
                     'duration': '4:31',
                     'fileName': 'song10.mp3',
                     'image' : 'song10.jpg'
                },
                    {  'name': 'Mera Dil Bhi Kitna Pagal Hai',
                       'artist': 'Kumar Sanu,Alka Yagnik',
                       'album': 'Saajan',
                       'duration': '5:26',
                       'fileName': 'song25.mp3',
                       'image' : 'song25.jpg'
                },
            {    'name': 'Mera Pehla Pehle Pyaar',
                     'artist': '--',
                     'album': 'Mera Pehla Pehle Pyaar',
                     'duration': '4:31',
                     'fileName': 'song10.mp3',
                     'image' : 'song10.jpg'
                }]    
            var audio =document.querySelector('audio')
            audio.src=songs7[0].fileName
            toggleSong();
            splfunction();
        });
        var mood8=document.querySelector('.mood8');
        mood8.addEventListener('click',function(){
            //baaki saari detailing hide krke intented detail show krna
            $('.main').removeClass('main1')
            $('.main').removeClass('main3')
            $('.main').removeClass('main4')
            $('.main').removeClass('main5')
            $('.main').removeClass('main6')
            $('.main').removeClass('main7')
            $('.main').removeClass('main2')
            $('.main').addClass('main8')
        songs = songs8 =[{  'name': 'Titanium feat. Sia',
                       'artist': 'David Guetta, Sia',
                       'album': 'Nothing But the Beat',
                       'duration': '4:05',
                       'fileName': 'song29.mp3',
                       'image' : 'song29.jpg'
                },
                {    'name': 'Get Low',
                     'artist': 'Dillon Francis, DJ Snake',
                     'album': 'Get Low',
                     'duration': '3:34',
                     'fileName': 'song30.mp3',
                     'image' : 'song30.jpg'
                },
                   {  'name': 'Titanium feat. Sia',
                       'artist': 'David Guetta, Sia',
                       'album': 'Nothing But the Beat',
                       'duration': '4:05',
                       'fileName': 'song29.mp3',
                       'image' : 'song29.jpg'
                },
                {    'name': 'Get Low',
                     'artist': 'Dillon Francis, DJ Snake',
                     'album': 'Get Low',
                     'duration': '3:34',
                     'fileName': 'song30.mp3',
                     'image' : 'song30.jpg'
                }]    
            var audio =document.querySelector('audio')
            audio.src=songs8[0].fileName
            toggleSong();
            splfunction();
        });
        //playlists change krta h
        function splfunction(){
                changeCurrentSongDetails(songs[0]);
                for(var i =0; i < songs.length;i++) {
                //using the songs object to fill in all the details
                    var obj = songs[i];
                    var name = '#song' + (i+1);
                    var song = $(name);
                    song.find('.song-name').text(obj.name);
                    song.find('.song-artist').text(obj.artist);
                    song.find('.song-album').text(obj.album);
                    song.find('.song-length').text(obj.duration);
                    addSongNameClickEvent(obj,i+1)
                }
        }

        function fancyTimeFormat(time)
        {   
            // Hours, minutes and seconds
            var hrs = ~~(time / 3600);//isko use nhi kiya
            var mins = ~~((time % 3600) / 60);
            var secs = time % 60;

            // Output like "1:01" or "4:03:59" or "123:03:59"
            var ret = "";

            if (hrs > 0) {
                ret += "" + hrs + ":" + (mins < 10 ? "0" : ""); //ret variable mey store krliya
            }

            ret += "" + mins + ":" + (secs < 10 ? "0" : "");
            ret += "" + secs;
            return ret;
        }

        //updates the current time and the duration of the songs.
        function updateCurrentTime(){ 
            var song = document.querySelector('audio');
            var currentTime = Math.floor(song.currentTime);//removes digits present after decimal
            var duration = Math.floor(song.duration);//same as above
            var bar=(currentTime*100)/duration;//for progres bar 
            currentTime = fancyTimeFormat(currentTime);
            duration = fancyTimeFormat(duration)
            $('.time-elapsed').text(currentTime);
            $('.song-duration').text(duration);
            Progressbar(bar);
        }

        function Progressbar(bar){
          var prog = document.querySelector('.progress-filled');
          prog.style.width= bar +"%";//final width css
        }
        $('.player-progress').click(function(event){
            var $this=$(this);
            var selectedLength= event.pageX-$this.offset().left;//jitni length se song play krna h
            var totalLength=$this.width();//song ka total span
            var width=(selectedLength/totalLength)*100;
            var song=document.querySelector('audio');
            song.currentTime=(song.duration*width)/100;
        });

        //setting the volume functionality
        var values = document.querySelector('#vol-control');
        var song = document.querySelector('audio');
        values.addEventListener('change',setVolume)//watching the change
        $('.responsive-pane i').on('click',function(){
                $('.responsive-pane i').removeClass('fa-volume-up').addClass('fa-volume-off');//chaining
                $('.responsive-pane i').removeClass('fa-volume-down').addClass('fa-volume-off');//chaining
                $('.responsive-pane span').text('Muted');
                song.volume=0;
            console.log(song.volume);
        })
        function setVolume(){
            song.volume = this.value / 100;//converts to values in btw 0 n 1
            if(this.value < 50){//font awesome k icon change krne k liye
                $('.responsive-pane i').removeClass('fa-volume-up').addClass('fa-volume-down');//chaining
                $('.responsive-pane span').text(' ');
                values=this.value;
            }
            else if(this.value > 50){
                $('.responsive-pane i').removeClass('fa-volume-down').addClass('fa-volume-up');
                $('.responsive-pane span').text(' ');
                values=this.value;
            }//changing the fa icon
        };

        function changeCurrentSongDetails(songObj) {//song k image name aur album show krn k liye
            $('.current-song-image').attr('src','Img/' + songObj.image)//src mey value dene ka new way
            $('.current-song-name').text(songObj.name)
            $('.current-song-album').text(songObj.album)
        }


        var songNumber = 1;

        function addSongNameClickEvent(songObj, position) //we have made a machine jispe 2 buttons diye hai songName and position ke liye
        {

            var songName = songObj.fileName;
            var id = '#song' + position; //#song ke saath position ko jod do and agar position 1 hai to output #song1 hogi jisse id mein store kar diya
            $(id).click(function() //agar #song1 hai to one vaale div pe event lage ga
                {
                      songNumber= position
                    var audio = document.querySelector('audio');
                    var currentSong = audio.src;
                    if (currentSong.search(songName) != -1) {
                        toggleSong();
                    } else {
                        audio.src = songName;
                        toggleSong();
                        changeCurrentSongDetails(songObj);
                    }
                });
        }

        
        //does the stipulated functions after the window is loaded
        window.onload = function() {
            changeCurrentSongDetails(songs[0]);
            splfunction();//sare playlist ke details ko apne apne element me insert krta hai
            $('#songs').DataTable({
                paging : false//removed unnecessary pagination
            });

            //checks and changes the time for every 1 second
            updateCurrentTime();
            setInterval(function() {
            updateCurrentTime();
            },1000); //1000 represents time in milliseconds
        }

$('.fa-repeat').on('click',function(){
    $('.fa-repeat').toggleClass('inactive');
    willLoop = 1- willLoop; //for repeat
});

$('.fa-random').on('click',function(){
    $('.fa-random').toggleClass('inactive');
    willShuffle = 1- willShuffle; //for shuffle
});

//to keep songs continuing and checking if or not repeat is requested
$('audio').on('ended',function(){
    var audio = document.querySelector('audio');
    if(willLoop==0){//agar repeat icon press nhi kia hua
        if(currentSongNumber < songs.length)
        {
            var nextSongObj = songs[currentSongNumber];//immediatee next song ko select krta h
            audio.src = nextSongObj.fileName;
            toggleSong();
            changeCurrentSongDetails(nextSongObj);
            currentSongNumber = currentSongNumber + 1;
        }
        else{
            $('.play-icon').removeClass('fa-pause').addClass('fa-play');
            audio.currentTime = 0;
        }
    }
    else if(willLoop==1){// repeat icon activate krne pr
        if(currentSongNumber < songs.length)
        {
            var nextSongObj = songs[currentSongNumber];
            audio.src = nextSongObj.fileName;
            toggleSong();
            changeCurrentSongDetails(nextSongObj);
            currentSongNumber = currentSongNumber + 1;
        }
        else if(currentSongNumber = songs.length){
            var nextSongObj = songs[0]; //phir se list k pehle wale song ko select r leta h
            audio.src = nextSongObj.fileName;
            toggleSong();
            changeCurrentSongDetails(nextSongObj);
            currentSongNumber = 1;
        }
    }
    else if(willShuffle==1){
       
    }
});

var next = document.querySelector('.fa-step-forward')
next.addEventListener('click',function(){
    var audio=document.querySelector('audio');
    if(songNumber<songs.length){//songNumber agar limit k andar h tho next song selct karenge
        var nextSong = songs[songNumber];
        audio.src=nextSong.fileName;
        changeCurrentSongDetails(nextSong)
        songNumber++;
        toggleSong();
    }
   else if(songNumber=songs.length){//agar song akhri h
       changeCurrentSongDetails(songs[0])//tho phir pehla song select hojayega
       toggleSong();
        songNumber=1;
    }
});

var previos = document.querySelector('.fa-step-backward')
previos.addEventListener('click',function(){
    var audio=document.querySelector('audio');
    if(songNumber>1){//ye Next ka opposie h
            var prevSong=songs[songNumber-2];
            audio.src=prevSong.fileName;
            changeCurrentSongDetails(prevSong);
            toggleSong();
            songNumber--;
        }
   else{
            var prevSong=songs[songs.length-1];
            audio.src=prevSong.fileName;
            changeCurrentSongDetails(prevSong);
            toggleSong();
            songNumber=songs.length;
    }
})

function timeJump(){var song = document.querySelector('audio');song.currentTime=song.duration-5;}
//song ko jump krwane k liye

$('#see-home').on('click',function(){
    //selected item ko dikhane k liye
    //baakhi saare items ko hide krdiya
    $('#mood-list').addClass('hidden')
    $('#songs_wrapper').addClass('hidden')
    $('#songs').addClass('hidden')
    $('#home-content').removeClass('hidden')
})
$('#see-playlist').on('click',function(){
    //selected item ko dikhane k liye
    //baakhi saare items ko hide krdiya
    $('#home-content').addClass('hidden')
    $('#mood-list').addClass('hidden')
     $('#songs_wrapper').removeClass('hidden')
     $('#songs').removeClass('hidden')
})
$('#see-moodlist').on('click',function(){
    //selected item ko dikhane k liye
    //baakhi saare items ko hide krdiya
    $('#home-content').addClass('hidden');
    $('#songs_wrapper').addClass('hidden');
    $('#mood-list').removeClass('hidden')
})
$('.mood').on('click',function(){//jis element p bhi mood ki class h uspe click krne pr..
    $('.main header').removeClass('header1').addClass('header2')
    $('#mood-list').addClass('hidden')
    $('#songs_wrapper').removeClass('hidden')
    $('#songs').removeClass('hidden')
})