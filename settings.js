const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': '1f6f851220',
}


//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./Void/theme/Cheems-bot.gif") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['6281252830322'] //ur owner number
global.ownername = "Robby Pratama W" //ur owner name
global.ytname = "YT:Robby Pratama W" //ur yt chanel name
global.socialm = "GitHub: None" //ur github or insta name
global.location = "Banyuwangi, Jawa Timur, Indonesia" //ur location

//bot bomdy 
global.owner = ['6281252830322']
global.ownertag = '6281252830322' //ur tag number
global.botname = 'DX AI' //ur bot name
global.linkz = "https://youtube.com/c/RobbyPratamaW" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtube.com/c/RobbyPratamaW" //ur website to be displayed
global.botscript = 'https://instagram.com/officials_robby' //script link
global.reactmoji = "😊" //ur menu react emoji
global.themeemoji = "😍" //ur theme emoji
global.packname = "DX BOT INC" //ur sticker watermark packname
global.author = "DX BOT INC" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./Void/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./Void/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Void/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./Void/theme/cheemspic.jpg") //ur thumb pic

//damtabase
global.premium = ['6281252830322']//ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = false
global.prefa = ['','*','_','!','.','#','~','-']
global.sp = '⭔'
global.mess = {
    success: '🅳🅾🅽🅴 ✓',
    admin: '♥ This Feature Is Only For Admin ♥!',
    botAdmin: 'ʙᴏᴛ ᴍᴜꜱᴛ ʙᴇ ᴀᴅᴍɪɴ ꜰɪʀꜱᴛ!',
    owner: 'This Feature Is Only For Owner!',
    group: '𝓕𝓮𝓪𝓽𝓾𝓻𝓮 𝓤𝓼𝓮𝓭 𝓞𝓷𝓵𝔂 𝓕𝓸𝓻 𝓖𝓻𝓸𝓾𝓹𝓼!',
    private: '𝔽𝕖𝕒𝕥𝕦𝕣𝕖𝕤 𝕌𝕤𝕖𝕕 𝕆𝕟𝕝𝕪 𝔽𝕠𝕣 ℙ𝕣𝕚𝕧𝕒𝕥𝕖 ℂ𝕙𝕒𝕥!',
    bot: '𝙏𝙝𝙞𝙨 𝙁𝙚𝙖𝙩𝙪𝙧𝙚 𝙄𝙨 𝙊𝙣𝙡𝙮 𝙁𝙤𝙧 𝘽𝙤𝙩',
    wait: '𝐿❀𝒶𝒹𝒾𝓃𝑔☢.',
    linkm: '𝒲𝒽𝑒𝓇𝑒 𝒾𝓈 𝓉𝒽𝑒 𝓁𝒾𝓃𝓀?',
    error: '𝔼𝕣𝕣𝕠𝕣!!',
    endLimit: '𝒴🍬𝓊𝓇 𝒟𝒶𝒾𝓁𝓎 𝐿𝒾𝓂𝒾𝓉 𝐻𝒶𝓈 𝐸𝓍𝓅𝒾𝓇𝑒𝒹, 𝒯𝒽𝑒 𝐿𝒾𝓂𝒾𝓉 𝒲𝒾𝓁𝓁 𝐵𝑒 𝑅𝑒𝓈𝑒𝓉 𝐸𝓋𝑒𝓇𝓎 𝟣𝟤 𝐻🏵𝓊𝓇𝓈',
    ban: '𝙔𝙤𝙪 𝙝𝙖𝙫𝙚 𝙗𝙚𝙚𝙣 𝙗𝙖𝙣𝙣𝙚𝙙 𝙗𝙮 𝙩𝙝𝙚 𝙤𝙬𝙣𝙚𝙧, 𝙞𝙛 𝙮𝙤𝙪 𝙬𝙖𝙣𝙩 𝙩𝙤 𝙗𝙚 𝙪𝙣𝙗𝙖𝙣𝙣𝙚𝙙, 𝙘𝙝𝙖𝙩 𝙤𝙬𝙣𝙚𝙧.',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
    global.limitawal = {
    premium: "Infinity",
    free: 30,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./Void/theme/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
