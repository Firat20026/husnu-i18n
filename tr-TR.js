const {Language,util} = require('klasa');

module.exports = class extends Language {

	constructor(...args) {
		super(...args);
		this.language = {

			// 	 _   _ _   _ ____  _   _ _   _
			//	| | | | | | / ___|| \ | | | | |
			//	| |_| | | | \___ \|  \| | | | |
			//	|  _  | |_| |___) | |\  | |_| |
			//	|_| |_|\___/|____/|_| \_|\___/

			//Bisiler
			DEFAULT: (key) => `${key} henüz dil dosyasına eklenmemiş. Lütfen bildirin => https://husnubot.me/destek `,
			DEFAULT_LANGUAGE: 'Varsayılan Dil',
			PREFIX_REMINDER: (prefix) => `Bu sunucu için prefix${Array.isArray(prefix) ?
				`ler ${prefix.map(pre => `\`${pre}\``).join(', ')}` :
				` şuna ayarlandı: \`${prefix}\``
			}`,
			COMMAND_HELP_DM: '<:bildirim:488134155830558749> | Gerekli bilgiyi DM olarak gönderdim.',
			COMMAND_HELP_NODM: '<:basarisiz:487418569538273291> | DM alımınız bu sunucu için kapalı, bu yüzden DM olarak gönderemedim.',

			//Ayarlar
			SETTING_GATEWAY_EXPECTS_GUILD: 'Parametre <Guild> için bir Guild veya Guild Objesi vermeniz gerekiyor.',
			SETTING_GATEWAY_VALUE_FOR_KEY_NOEXT: (data, key) => `${data} için ${key} anahtarı yok..`,
			SETTING_GATEWAY_VALUE_FOR_KEY_ALREXT: (data, key) => `${data} zaten ${key} içinde var.`,
			SETTING_GATEWAY_SPECIFY_VALUE: 'Filtre veya değer vermeniz gerekiyor.',
			SETTING_GATEWAY_KEY_NOT_ARRAY: (key) => `${key} Array değil.`,
			SETTING_GATEWAY_KEY_NOEXT: (key) => `${key} veri şemasında bulunamadı.`,
			SETTING_GATEWAY_INVALID_TYPE: 'parametrenin ayarla veya kaldır olması gerekiyor.',

			//RichDisplay
			REACTIONHANDLER_PROMPT: 'Hangi sayfaya atlamak istersin?',

			//Command olaylari
			COMMANDMESSAGE_MISSING: 'Bir veya birden fazla argüman eksik.',
			COMMANDMESSAGE_MISSING_REQUIRED: (name) => `${name} zorunlu bir argüman.`,
			COMMANDMESSAGE_MISSING_OPTIONALS: (possibles) => `Zorunlu argümanlardan birisi eksik: (${possibles})`,
			COMMANDMESSAGE_NOMATCH: (possibles) => `Seçiminiz olası değerlerden biri değil: (${possibles})`,
			MONITOR_COMMAND_HANDLER_REPROMPT: (tag, error, time) => `${tag} | **${error}** | Mesaja geçerli bir argüman ile yanıt vermek için **${time}** saniyeniz var . iptal etmek için **"iptal"** yazın.`, // eslint-disable-line max-len
			MONITOR_COMMAND_HANDLER_REPEATING_REPROMPT: (tag, name, time) => `${tag} | **${name}** tekrar eden bir argüman. | Bu mesaga geçerli bir argüman ile cevap vermek için **${time}** saniyen var. İptal etmek için **"iptal"** yaz.`, // eslint-disable-line max-len
			MONITOR_COMMAND_HANDLER_ABORTED: 'İptal edildi.',

			//Inhibitor
			INHIBITOR_COOLDOWN: (remaining) => `Komutu daha yeni kullanıdınız. ${remaining} saniye içerisinde tekrar deneyin.`,
			INHIBITOR_DISABLED_GLOBAL: 'Bu komut şu anda bozuk, sanayiye verdik bizim usta halledecek.',
			INHIBITOR_DISABLED_GUILD: 'Bu komut bu sunucuda kapatılmış.',
			INHIBITOR_MISSING_BOT_PERMS: (missing) => `Gerekli **${missing}** yetkisine sahip değilim.`,
			INHIBITOR_PERMISSIONS: 'Bu komutu kullanmaya yetkin yok.',
			INHIBITOR_NSFW: 'Bu kanal NSFW kanalı değil. Komudu kullanabilmek için ayarlardan bunu açman gerekli.',
			INHIBITOR_REQUIRED_SETTINGS: (settings) => `Bu sunucu **${settings.join(', ')}** ayar${settings.length > 1 ? 'larına' : 'ına'} sahip değil. Bu yüzden bu komut çalıştırılamaz.`,
			INHIBITOR_RUNIN: (types) => `Bu komut sadece ${types} kanallarında kullanılabilir.`,
			INHIBITOR_RUNIN_NONE: (name) => `${name} komut herhangi bir kanalda kullanılmak için ayarlanmamış.`,
			INHIBITOR_DJ_SUNUCU: "Bu komut sadece sunucularda kullanılabilir.",
			INHIBITOR_DJ: "Sadece DJ rolü olanlar, veya herhangi normal bir üyeden fazla yetkisi olanlar kullanabilir.",
			INHIBITOR_MUSIC_SUNUCU: 'Bu komut sadece sunucuda kullanılabilir.',
			INHIBITOR_MUSIC_SESLI: "Bir sesli kanalda olman gerekli.",
			INHIBITOR_MUSIC_BENSESLI: "Benim de bir sesli kanalda olmam gerekli.",
			INHIBITOR_MUSIC_AYNI: 'Benimle aynı kanalda olmalısın.',
			INHIBITOR_MUSIC_SARKIYOK: 'Kuyrukta şarkı yok.',

			//Monitorler
			ANTIINVITE: (author) => `${author} bu linki benden başka kimse göremedi ve artık göremez. Eğer spam atıyorsan vazgeç çünkü ben linkini silmekten vazgeçmeyeceğim.`,
			AFK_TITLE: (tag) => `***${tag}*** adlı kullanıcı afk!`,
			AFK_DESC: (neden) => `Şu yüzden afk => ${neden}`,
			AFK_GERIGEL: (tag) => `Demek geri geldin ${tag}! O zaman afk değilsin artık! Tekrar afk olmak için tekrar ayarla.`,

			//Tasklar
			KILIT: "Kanal\u0131n kilidi a\u00e7\u0131ld\u0131!",
			HATIRLATICI: (text) => `**Hatırlatıcı:** ${text}`,
			HATIRLATICI_DMYOK: (u, text) => `<@${u}>, **Hatırlatıcı:** ${text}`,

			//KOMUTLAR

			//Varsayilan komutlar
			COMMAND_UNLOAD: (type, name) => `✅ Geçici olarak hafızadan silindi ${type}: ${name}`,
			COMMAND_TRANSFER_ERROR: '<:basarisiz:487418569538273291> Bu dosya çoktan transfer edildi yada hiç varolmadı.',
			COMMAND_TRANSFER_SUCCESS: (type, name) => `✅ Başarıyla transfer edildi ${type}: ${name}`,
			COMMAND_TRANSFER_FAILED: (type, name) => `${type}: ${name} transferi başarısız. Lütfen Konsola bakın.`,
			COMMAND_RELOAD: (type, name) => `✅ Yeniden yüklendi ${type}: ${name}`,
			COMMAND_RELOAD_ALL: (type) => `✅ ${type} tümü yeniden yüklendi.`,
			COMMAND_RELOAD_FAILED: (type, name) => `❌ Hata ${type}: ${name}. Konsola bak.`,
			COMMAND_REBOOT: 'Yeniden başlatılıyor...',
			COMMAND_PING: 'Ping?',
			COMMAND_PINGPONG: (diff, ping) => `Pong! (Dolaşım: ${diff}ms. Kaynak: ${ping}ms.)`,
			COMMAND_INVITE_DESCRIPTION: 'Botun davet linkini gönderir.',
			COMMAND_ENABLE: (type, name) => `+ ${type}: ${name} başarıyla aktifleştirildi.`,
			COMMAND_DISABLE: (type, name) => `+ ${type}: ${name} başarıyla kapatıldı`,
			COMMAND_DISABLE_WARN: 'Bunu kapattığın hiç bir komutu kullanamayacağın için kapatmak istemezsin.',
			COMMAND_CONF_NOKEY: 'Bir anahtar sağlaman gerekiyor.',
			COMMAND_CONF_NOVALUE: 'Bir değer sağlaman gerekiyor.',
			COMMAND_CONF_ADDED: (value, key) => `\`${value}\` başarıyla **${key}** anahtarına eklendi.`,
			COMMAND_CONF_UPDATED: (key, response) => `**${key}** başarıyla \`${response}\` ile güncellendi`,
			COMMAND_CONF_KEY_NOT_ARRAY: 'Bu anahtar array tipinde değil. \'reset\' kullanın.',
			COMMAND_CONF_REMOVE: (value, key) => `\`${value}\` başarıyla **${key}** anahtarından silindi.`,
			COMMAND_CONF_GET_NOEXT: (key) => `**${key}** anahtarı hiç varolmamış gibi.`,
			COMMAND_CONF_GET: (key, value) => `**${key}** anahtarı için şu anki değer: \`${value}\``,
			COMMAND_CONF_RESET: (key, response) => `**${key}** anahtarı \`${response}\` şeklinde sıfırlandı.`,
			COMMAND_CONF_NOCHANGE: (key) => `The value for **${key}** was already that value.`,
			COMMAND_CONF_SERVER_DESCRIPTION: 'Define per-server configuration.',
			COMMAND_CONF_SERVER: (key, list) => `**Server Configuration${key}**\n${list}`,
			COMMAND_CONF_USER_DESCRIPTION: 'Define per-user configuration.',
			COMMAND_CONF_USER: (key, list) => `**User Configuration${key}**\n${list}`,
			MESSAGE_PROMPT_TIMEOUT: 'Belirtilen sürede bir değer girmediğin için otomatik olarak iptal edildi.',
			COMMAND_BLACKLIST_SUCCESS: (usersAdded, usersRemoved, guildsAdded, guildsRemoved) => [
				usersAdded.length ? `**Kullanıcı(lar) eklendi**\n${util.codeBlock('', usersAdded.join(', '))}` : '',
				usersRemoved.length ? `**Kullanıcı(lar) kaldırıldı**\n${util.codeBlock('', usersRemoved.join(', '))}` : '',
				guildsAdded.length ? `**Sunucu(lar) eklendi**\n${util.codeBlock('', guildsAdded.join(', '))}` : '',
				guildsRemoved.length ? `**Sunucu(lar) kaldırıldı**\n${util.codeBlock('', guildsRemoved.join(', '))}` : ''
			].filter(val => val !== '').join('\n'),
			COMMAND_EVAL_ERROR: (time, output, type) => `**Hata**:${output}\n**Tür**:${type}\n${time}`,
			COMMAND_EVAL_OUTPUT: (time, output, type) => `**Çıktı**:${output}\n**Tür**:${type}\n${time}`,
			COMMAND_EVAL_SENDFILE: (time, type) => `Çıktı çok uzun bir dosya olarak gönderdim.\n**Tür**:${type}\n${time}`,
			COMMAND_EVAL_SENDCONSOLE: (time, type) => `Çıktı çok uzun konsola gönderdim.\n**Tür**:${type}\n${time}`,
			DATE_FORMAT: " Y [yıl] D [gün], H [saat], m [dakika], s [saniye]",
			//Yardım komudu
			COMMAND_HELP_SECRET: "Gizli Komutlar",
			COMMAND_HELP_SECRET_DESC: "Ama buraya yazarsam bunları gizli olmasının bi anlamı kalmaz ki? Kendin bulmaya çalış! İpucu: `?yardım` yaz",
			COMMAND_HELP_CATEGORY: (cat) => `${cat} Komutları`,
			COMMAND_HELP_LOADING: "Eğer bu mesajı görüntülemekte zorluk yaşıyorsanız lütfen `?komutlar tümü` yazın. Psst, ben denedim çalıştı!",
			COMMAND_HELP_DESCRIPTION: "Bu mesajı gösterir.",
			COMMANDS_DESC_ADMIN: {
					"at": "Sunucudan birini atmanızı sağlar.",
					"sustur": "Etiketlediğiniz kullanıcıyı susuturur.",
					"temizle": "Belirlediğiniz mesaj sayısı kadar mesaj siler",
					"yasakla": "Kullanıcıyı sunucudan yasaklar.",
					"yavasmod": "Kanalda yavaş modu açar.",
					"kilitle": "Yazılan kanalı beliritilen süre boyunca kilitler.",
					"davetkoruma": "Sunucunda davet engellemeyi açıp kapatır.",
					"lisan": "Sunucunda botun dilini değiştirmeni sağlar.",
					"prefix": "Sunucunda komutlardan önce gelen işareti değiştirir.",
					"sovayar": "Söv komudunu kapatıp açar."
			},
			COMMANDS_DESC_GENERAL: {
					"geribildirim": "Bot için öneri yapmak veya fikir belirtmeni sağlar.",
					"konustur": "Botun ağzından söyletmek istediğini yazdırır.",
					"kullanicibilgi": "Kullanıcı olarak hesap bilgini gösterir.",
					"kullanicibul": "Seninle aynı tagde olan kullanıcıları bulur.",
					"profilfoto": "Profil fotoğrafını gönderir.",
					"sunucubilgi": "Sunucunun bilgisini gösterir.",
					"botbilgi": "Botun bilgisini gösterir.",
					"ping": "Botun indirme yükleme hızını anlık olarak ölçer.",
					"hosting": "Sponsorumuzun bilgileri.",
					"yardim": "Yardım mesajını gönderir.",
					"davet": "Botun davet linkini gönderir."
			},
			COMMANDS_DESC_MUSIC: {
					"ayril": "Botun sesli kanaldan ayrılmasını sağlar.",
					"cal": "Botun listesine eklediğiniz müzikleri oynatır.",
					"duraklat": "Müziği duraklatır. (Tam bitmediği için açık değil)",
					"gec": "Çalan şarkıyı atlar.",
					"kuyruk": "Kuyruğun ilk 10 şarkısnı gösterir.",
					"sarkibilgisi": "Şarkının genius veritabanı bilgisini.",
					"sarkisozleri": "Şarkının sözlerini gönderir.",
					"simdikisarki": "Çalan şarkısnın bilgisini gösterir.",
					"karistir": "Kuyruğu rasgele tekrar dizer.",
					"ses": "Sesi ayarlar.",
					"tekrarla": "Kuyruğu sürekli tekrarlar.",
					"djmodu": "DJ modunu açar.",
					"djekle": "DJ ekler."
			},
			COMMANDS_DESC_NSFW: {
					"banamemegöster": "Memeğ.",
					"linkver": "Link mi arıyorsun ? Tam sana göre.",
					"nsfwgif": "Hareket demek. İyi seçim.",
					"nsfwresim": "Güzel fotoğraflar atar. Ama şu işe bakın çıplaklar."
			},
			
			COMMANDS_DESC_FUN: {
					"anasınısik": "Bir anne gördüm sanki.",
					"avatarboz": "/Avatarına bi haller olur.",
					"başarım": "/Minecraft başarımı.",
					"chucknorris(i)": "Rasgele bir chuck norrisşakası yapar (İngilizce).",
					"cicikuş": "Cicikuş cicikuş cicikuş babacık.",
					"fortnite": "Fortnite istatistiklerini gösterir.",
					"gifara": "Gif aramanı sağlar.",
					"havadurumu": "Girdiğin yerin havadurumunu gösterir.",
					"husnuyesor": "/Husnu sorduğun sorulara yanıt verir.",
					"kaçcm": "Seninki ne kadar?",
					"lgbt": "/Bunu kullan ve renkleri göster!",
					"memeara": "Meme arar. Yok canım o meme değil onlar nsfw kategorisinde.",
					"parti": "Patlıyor muyuz?",
					"pokemongif": "Rasgele bir pokemon gifi atar. İsmine bakmadan tahmin etmeye çalış!",
					"randommeme": "Rasgele meme atar. O meme değil onlar nsfw kategorisinde.",
					"sigara": "Aga be yak yak yak.",
					"söv": "İstediğin kişiye yaratıcılıkla söver. **Bu komut eğlence içindir.**",
					"kafanısikeyim": "/Kafanı sikeyim dediklerine uygulayabilirsin.",
					"tts": "Bota sesli kanalda istediklerini söylet. Çevirideki ablamız okuyor.",
					"yazıtura": "Yazı mı tura mı?",
					"kekoyaz": "bAk bÖylE",
					"mtt": "Mors kodundan yazıya çevirir.",
					"ttm": "Yazıdan mors koduna çevirir.",
					"hiyaa": "/Yaklaş yaklaş ben karete biliyorum.",
					"oof": "/*Elini yüzüne koyarak karşıdakini aptal gibi hissettirme hareketi*"
			},
			COMMANDS_SECRET: {
					"all": "Eğer söylersem artık gizli olurlar mı ?"
			},
			COMMANDS_DESC_CUSTOMCMDS: {
					"komutayar": "Özel komut kullanımı açar/kapatır.",
					"komutdüzenle": "Özel komutları düzenler.",
					"komutekle": "Özel komut ekler.",
					"komutkaldır": "Özel komut kaldırır.",
					"komutliste": "Sunucudaki komutları gösterir."
			},
			COMMANDS_DESC_LOGS: {
					"girişkanalıekle": "Giriş mesajını açar/kapatır.",
					"girişresmiayar": "Giriş resminin atılcağı kanalı ayarlar.",
					"otorolayar": "Otomatik rol vermeyi açar/kapatır.",
					"otorolekle": "Otomatik olarak verilecek rolü ekler.",
					"kayıtkanalıekle": "Kayıt kanalını belirler.",
					"kayıtayar": "Kayıt kanalında kayıt tutulmasını açar/kapatır."
			},
			COMMANDS_DESC_PROFIL: {
					"profil": "Profilinizi gösterir.",
					"ref": "Etiketlediğiniz kullanıcıya referans puanı verir.",
					"günlük": "Günlük olarak para çekmenizi sağlar, oy verdiyseniz 200 alırsınız.",
					"açıklama": "Profil açıklamanızı değiştirir.",
			},
			COMMANDS_DESC_MARKET: {
					"market": "Marketi gösterir, yanına ürün kodunu yazdığınız zaman satın almanızı sağlar.",
					"sovcevap": "Marketten aldığınız ozelsov ürününü kullanmanızı sağlar.",
					"başka": "Devamı için ?geribildirim komudu ile markete eklenmesini istediğiniz şeyleri gönderin."
			},
			COMMANDS_NOT: [
					"=NOTLAR=",
					"",
					"- Deneyim puanlaması => 4.5 saniyede 1 mesaj başına 1-5 arası deneyim puanı.",
					"- Giriş resimlerinde arka planınızı değiştirmek için bağış atabilirsiniz! Aynı zamanda gelecek olan profil komudunda da işe yarayacak!",
					"- Kayıt kanallarında rol değiştirme işlemlerinde bazen bir rol değiştirildiğinde bir defaya mahsus bütün rolleri atabiliyor değiştirildi diye en yakın zamanda düzeltilecek!"
			].join("\n"),

			//Slowmode
			SMODE_ARASI: "0 ve 120 arasında olmalı.",
			SMODE_BASARI: "Başarılı!",

			//At
			AT_HATA:"Bu kullanıcıyı atamıyorum! Belki sunucudan çıkmış, atılmış veya yasaklanmış olabilir.",
			AT_KENDINI:`***Kendini mi atmaya çalışıyorsun yoksa bana mı öyle geliyor? Hayır biliyorum senin durumunu da bu kadar değildir bence.***`,
			AT_HUSNU:"Kardeşim beni atıcaksan niye aldın sunucuya, hadi tamam aldın beğenmedin bunu niye bana yaptırıyosun! Atmıycam kendimi, hıh!",
			AT_NEDENYOK:"Neden belirtilmedi. Atan: ",
			AT_NEDENVAR: (r, un) => `${r}\n Atan: ${un} `,
			AT_BASARILI:"adlı üye başarıyla sunucudan atıldı.",

			//Sustur
			SUSTUR_KENDINI:"Manyak mısın? Niye kendini susturmaya çalışıyorsun?",
			SUSTUR_HUSNU:"Hayır fazla konuşuyosam söyle bu çok kaba oldu.",
			SUSTUR_ROLHATA:"Normalde çalışması gereken bir kod çalışmıyor, rollerle ilgili bir hata var. yardım komudunu kullanarak destek sunucumuza gel ve yardım al!",
			SUSTUR_ACILDI:"Ceza başarıyla kalktı!",
			SUSTUR_SUSTURULDU:"C E Z A L A N D I N",

			//Temizle
			TEMIZLE_YETKIM:"<:basarisiz:487418569538273291>Benim mesaj silme yetkim yok, mesaj silmemi istememiş, kapatmış olabilirsin ama o zaman niye bana bu komudu kullandırtıyosun ki!",
			TEMIZLE_YETKIN:"<:basarisiz:487418569538273291>Yetkin yok!" ,
			TEMIZLE_ARALIK:"<:basarisiz:487418569538273291>2 ile 200 arasında bir değer girmelisin!" ,
			TEMIZLE_GUNSINIR: "Sadece son 14 gün içinde atılmış mesajları toplu silebilirsin.",
			TEMIZLE_BASLIK:"Husnu ∞ | Bu mesaj kendini 10 saniye içinde silecek!" ,
			TEMIZLE_SILEN:"Silen kişi" ,
			TEMIZLE_SAYI:"Silinen mesaj sayısı" ,

			//Yasakla
			YASAKLA_HATA:"Bu kullanıcıyı yasaklayamıyorum! Belki sunucudan çıkmış, atılmış veya yasaklanmış olabilir.",
			YASAKLA_KENDINI:`***Kendini mi yasaklamaya çalışıyorsun yoksa bana mı öyle geliyor? Hayır biliyorum senin durumunu da bu kadar değildir bence.***`,
			YASAKLA_HUSNU:"Kardeşim beni yasaklayacaksan niye aldın sunucuya, hadi tamam aldın beğenmedin bunu niye bana yaptırıyosun! Yasaklamıycam kendimi, hıh!",
			YASAKLA_NEDENYOK:"Neden belirtilmedi. Yasaklayan: ",
			YASAKLA_NEDENVAR: (r, un) => `${r}\n Yasaklayan: ${un} `,
			YASAKLA_BASARILI:" adlı üye başarıyla sunucudan atıldı.",

			//Komutayar
			KOMUTAYAR_TRUE: `***Özel komut kullanımı bu sunucu için aktif!***`,
			KOMUTAYAR_FALSE: `***Özel komut kullanımı bu sunucu için devre dışı!***`,

			//Komutdüzenle
			KOMUTDUZENLE_KOMUTVAR: "adında bir komut bulunuyor fakat özel bir komut değil, bu nedenle düzenleyemezsin.",
			KOMUTDUZENLE_DUZENLENDI: (un) => `adlı komut ${un} tarafından güncellendi!`,
			KOMUTDUZENLE_BULUNAMADI: "adında bir komut bulunamadı.",

			//Komutekle
			KOMUTEKLE_KOMUTVAR: "adında bir komut bulunuyor fakat özel bir komut değil, bu nedenle düzenleyemezsin.",
			KOMUTEKLE_EKLENDI: (un) => `adlı komut ${un} tarafından güncellendi!`,
			KOMUTEKLE_KOMUTVAROZEL: "adında bir komut zaten özel komut olarak var. Düzenleme komudu ile düzenleyebilirsin.",

			//Komutkaldır
			KOMUTKALDIR_YOK: "adında bir özel komut bulamıyorum.",
			KOMUTKALDIR_KALDIRILDI: (un) => `adlı komut ${un} tarafından güncellendi!`,

			//Komutliste
			KOMUTLISTE_YOK: `***Özel komut bulunamadı!***`,
			KOMUTLISTE_ETITLE : "Sayfalar arasında geçiş yapmak için tepkileri kullanın. Eğer komutlar birden fazla sayfa doldurmuyorsa sayfa geçiş tepkileri çıkmayacaktır.",
			KOMUTLISTE_EAUTH : "Özel Komutlar",
			KOMUTLISTE_GOSTER : "<a:loading:393852367751086090> Komutlar gösteriliyor...",

			//Antiinvite
			ANTIINVITE_TRUE: `<:basarili:487417662390009867> ***Artık bu sunucuda davet linkleri engellenmeyecek!***`,
			ANTIINVITE_FALSE: `<:basarili:487417662390009867> ***Artık bu sunucuda davet linkleri engellenecek!***`,

			//Giriskanaliekle
			GKE_HATA: "Bir hata oluştur lütfen daha sonra tekrar deneyiniz.",
			GKE_BASARI: (cn, pfx) => `${cn} ***adlı kanal için hoşgeldin mesajları ayarlandı! Açıp kapatmak için ${pfx}girişresmiayar kullan***`,

			//Girişresmiaç
			GRAYAR_TRUE: '***Artık bu sunucuya gelenlerin hoşgeldin mesajı gönderilecek, eğer bunun için kanal ayarlamadıysan çalışmaz. Ayarlamak için "?girişkanalıekle" komudunu kullanabilirsin!***',
			GRAYAR_FALSE: "***Artık bu sunucuya gelenlerin hoşgeldin mesajı gönderilmeyecek!***",

			//Kayitayar
			KAYAR_TRUE: '***Artık yapılan atma, yasaklama, susturma gibi işlemlerde kayıt kanalında kayıt tutulacak, eğer bunun için kanal ayarlamadıysan çalışmaz. Ayarlamak için "?kayıtkanalıekle" komudunu kullanabilirsin!***',
			KAYAR_FALSE: "***Artık yapılan atma, yasaklama, susturma gibi işlemlerde kayıt kanalında kayıt tutulmayacak!***",

			//Kayitkanaliekle
			KKEKLE_HATA: "Bir hata oluştur lütfen daha sonra tekrar deneyiniz.",
			KKEKLE_BASARI: (cn) => `***Kayıt kanalı belirlendi! Artık yapılan atma, yasaklama, susturma gibi işlemlerde #${cn} kanalında kayıt tutulacak.***`,

			//Lisan
			LANG_YOK : "Olmayan bir dilde mi konuşayım ?",
			LANG_AYNI : "Eski dil ile yenisini aynı olarak ayarlayacaksan değiştirmeye ne gerek var?",
			LANG_EKLIDIL : 'Geçerli bir dil girmen gerekli! Şu anda bota ekli olan diller "tr-TR" "en-US"',
			LANG_BASARI : (lang) => `Bu sunucuda artık "${lang}" dilini konuşacağım!`,
			LANG_RESET : (defLang) => `Sunucunun dili varsayılan dil olan \`${defLang}\` 'ye ayarlandı!`,

			//Otorolayar
			ORAYAR_TRUE: '***Artık bu sunucuya gelenlere rol verilecek, eğer rolü ayarlamadıysan çalışmaz. Rolü ayarlamak için "?otorolekle" komudunu kullanabilirsin!***',
			ORAYAR_FALSE: "***Artık bu sunucuya gelenlere rol verilmeyecek!***",

			//Otorolekle
			OREKLE_KALDIR: "***adlı rol otorol için kaldırıldı!***",
			OREKLE_EKLE: "***adlı rol otorol için eklendi!***",

			//Prefix
			PFX_YOK: "Komutların önüne ne gelceğini yazmadın ?",
			PFX_AYNI: "Eski prefix ile yenisi aynı olarak ayarlayacaksan değiştirmeye ne gerek var?",
			PFX_BASARI: (pfx) => `Bu sunucuda artık komutların önüne "${pfx}" işaretini getirmelisin!`,
			PFX_RESET: (pfx) => `Sunucunun prefixi varsayılan olan \`${pfx}\` işaretine ayarlandı!`,

			//Sovayar
			SAYAR_YETKI: "Yetkin yok!",
			SAYAR_FALSE: "<:basarili:487417662390009867> ***Artık bu sunucuda sövmeyeceğim bana doğru yolu gösterdin!***",
			SAYAR_TRUE: "<:basarili:487417662390009867> ***Artık bu sunucuda sövebilirim siktir et yolu yoldan çıktım ben!***",

			//Spamkoruma
			SKORU_FALSE: "<:basarili:487417662390009867> ***Artık bu sunucuda spam engellenmeyecek!***",
			SKORU_TRUE: "<:basarili:487417662390009867> ***Artık bu sunucuda spam engellenecek!***",

			//Parti
			PARTI_NOS: "**Sadece HusnuBot Official Sunucusunda çalışır gelmek için ?yardım yazın.**",
			PARTI_S: "Aslında seni kandırdım. Bi nevi clickbaitlendin :D . Neyse seni sunucumuza aldımıza göre burada kalıp ortama ayak uydurabilirsin. Rol için kurallara göz gezdirmeyi unutma!**",

			//Kullanicibul
			KBUL_YETKI: "Yetkin yok!",
			KBUL_ADYAZ: "<:basarisiz:487418569538273291>Kişi adını yazınız.",

			//Konustur
			KNSTR_YAZIYAZ: 'Göndermek için bir şey yazman gerekli.',
			KNSTR_KNSTRAN: "Konuşturan => ",

			//Afk
			AFK_NEDENYOK: "Neden girilmemiş.",
			AFK_HATA: "Bir hata oluştu. Lütfen daha sonra deneyin.",
			AFK_BASARI: "Başarılı! Afk durumun güncellendi!",

			//Botbilgi
			BOTBILGI_BILGI: (memUsage, uptime, cmdcount, users, servers, channels, mc, klasaVersion, discordVersion, processVersion, clusterid, shardid) => [
				'= Istatistikler =',
				'',
				`• Hafıza kullanımı   :: ${memUsage} MB`,
				`• Açık kalma süresi  :: ${uptime}`,
                `• Kullanılan Komut   :: ${cmdcount}`,
				`• Kullanıcılar	   :: ${users}`,
				`• Sunucular  		:: ${servers}`,
				`• Kanallar  		 :: ${channels}`,
				`• Aktif Müzik        :: ${mc}`,
				`• Klasa     		 :: v${klasaVersion}`,
				`• Discord.js		 :: v${discordVersion}`,
				`• Node.js   		 :: ${processVersion}`,
				this.client.shard.shardCount ?
					`• Shard     		 :: ${shardid} / ${this.client.shard.shardCount}` : '',
				this.client.shard.clusterCount ?
					`• Cluster     	   :: ${clusterid} / ${this.client.shard.clusterCount}` : ''
					
			],

			//Dkaydı
			DKAYDI: [
				"```fix",
				"= DEGISIM KAYDI =",
				"profil          = Profilinizi gösterir.",
				"ref             = Etiketlediğiniz kullanıcıya referans puanı verir.",
				"günlük          = Günlük olarak para çekmenizi sağlar, oy verdiyseniz 200 alırsınız.",
				"açıklama        = Profil açıklamanızı değiştirir.",
				"market          = Marketi gösterir, yanına ürün kodunu yazdığınız zaman satın almanızı sağlar.",
				"sovcevap        = Marketten aldığınız ozelsov ürününü kullanmanızı sağlar.",
				"```"
			].join("\n"),

			//Bilgi
			BILGI: [
				"Husnu kullanımı kolay bir discord botudur! Üstelik Türkçe!",
				"",
				"Bir sürü özellik var:",
				"Moderasyon komutları (at/yasakla, mod-log, temizle)",
				"Müzik (YouTube, oynatma listeleri, kuyruk, canlı yayınlar, Souncloud)",
				"Nsfw komutları.",
				"Değiştirilebilir prefix ve dil.",
				"Profil sistemi ve market.",
				"Bir sürü eğlence komudu.",
				"Ve kullanıcıların en çok sevdiği özellik söv!"
			],

			//Davet
			DAVET: [
				`Oy vermek, botun özelliklerine ulaşmak, websiteye gitmek ve sunucuya davet etmek için https://husnubot.me/upvote`,
				util.codeBlock('', [
					'Yukarıdaki bağlantı tüm komutları kullanmak için istediği minimum yetkiyle oluşturulmuştur.',
					'Komutları kullanabilmek için lütfen istediği bütün yetkileri eksiksiz ver.',
					'Eğer botun herhangi bir komutu gerçekleştirmeye yetkisi yoksa sizi bilgilendirecektir.'
				].join(' ')),
				'Hata ile karşılaşırsan destek sunucumuza gelebilirsin. => https://husnubot.me/destek .'
			],

			//Ping
			PING_BEKLE: 'Lütfen ölçülürken bekleyiniz (10 - 15 saniye sürer.)...',
			PING_HATA: "Bir hata oluştu! Daha sonra tekrar deneyin!",
			PING_DOWN: 'İndirme Hızı (Mbp/s)',
			PING_UPLD: 'Yükleme Hızı (Mbp/s)',
			PING_PINGTT: 'Gecikme (Turk Telekom)',
			PING_PINGGGL: 'Gecikme (google.com)',
			PING_PING: 'Gecikme (Discord)',
			PING_HOST: "Ağır şartlarda bile bunun gibi değerlerde çalışan bot hostingi için:",
			PING_OLCU: "Ölçüldü!",

			HOSTING_TTL: "**AnadoluHost - Dedicated & VDS & Oyun ve Web Sunucuları**",
			HOSTING: ["▸ 7/24 sürekli destek. (Canlı Destek, Destek Talebi, Telefon, Whatsapp, Discord)",
					  "▸ Profesyonel ekip, profesyonel yardım.",
					  "▸ %100 DDoS korumalı sunucular.",
					  "▸ Kişisel olarak yardım ve destek.",
					  "▸ En kaliteli donanım, en iyi performans.",
					  "[Site](https://anadolu.host) - [Discord](https://discord.gg/szBnxvM)"].join("\n"),
			
			//Yardim
			YARDIM_TSK: "Beni kullandigin için saol!",
			YARDIM_KMTLR: 'Komuları görmek için "?komutlar" kullanabilirsin!',
			YARDIM_DVT: "Davet et",
			YARDIM_DVTDESC: "[Beni Davet Etmek Için Tikla](https://husnubot.me/davet) - [Discord Sunucumuza Gelmek Için Tikla](https://husnubot.me/destek)",
			YARDIM_BLG: "Bilgi",
			YARDIM_BLGDESC: (u, c, g) => `Bu shardda ${u} kullanici,  ${c} kanal ve ${g} sunucu.`,
			YARDIM_GZL: "Gizli komut",
			YARDIM_GZLDESC: "**SÜPER MÜKEMMEL GİZLİ** bir **KOMUT** var bunu bulabilir misin?",
			YARDIM_ROL: "Husnubot Sunucusunda rol ister misin ?",
			YARDIM_ROLDESC: "Yukarıdaki linklerden sunucuya gel ve [buradan](https://husnubot.me/upvote) HusnuBot'a upvote at. Ardından ?upvote yazarak rolünü al!",
			YARDIM_YNLK: "Yenilikler",
			YARDIM_YNLKDESC: "Yenilikleri görebilmek için ?dkaydı komutunu kullanmalısın.",
			YARDIM_SPONSOR: "**AnadoluHost - Dedicated & VDS & Oyun ve Web Sunucuları** \n[Site](https://anadolu.host) - [Discord](https://discord.gg/szBnxvM)",
			YARDIM_SPONSOR_DSC: "Sponsorumuz",
			YARDIM_FOOTER: "HusnuBot v2.0.6 © HusnuBot",

			//Sunucubilgi
			SBILGI_AD: 'İsim:',
			SBILGI_ID: 'ID:',
			SBILGI_ACILMA: 'Sunucunun oluşturulma tarihi:',
			SBILGI_KULLANICI: 'Kaç kullanıcı var:',
			SBILGI_ONLINE: 'Kaç kullanıcı çevrimiçi:',
			SBILGI_KANAL: 'Kaç kanal var:',
			SBILGI_FOOTER: "© HusnuBot",

			//Kullanicibilgi
			KBILGI_SDEGIL: "Bu kullanıcı sunucuda değil!",
			KBILGI_ROLYOK: 'Yazıık rolü yok.',
			KBILGI_DND: "Rahatsız Etmeyin",
			KBILGI_ONL: "Çevrimiçi",
			KBILGI_IDLE: "Boşta",
			KBILGI_OFL: "Görünmez",
			KBILGI_KLNC: "Kullanıcı:",
			KBILGI_OYUN: "Oynadığı Oyun:",
			KBILGI_OYUNYOK: 'Oyun Oynamıyor',
			KBILGI_DURUM: "Durum:",
			KBILGI_KSONRA: 'Katıldıktan Sonra',
			KBILGI_KSONRADESC: (zaman) => `${zaman} geçmiş vay be.`,
			KBILGI_AGE: 'Hesap Tamı Tamına',
			KBILGI_AGEDESC: (zaman) => `${zaman} önce açılmış.`,
			KBILGI_TARIH: "Hesap Oluşturuluş Tarihi:",
			KBILGI_ROL: 'Rolleri:',
			KBILGI_FOOTER: "© HusnuBot",

			//Profilfoto
			PFOTO: (ut) => `${ut} adlı kullanıcının profil fotoğrafı.`,

			//Hatirlat
			HATIRLAT: "Yeni bir hatırlatıcı oluşturuldu.",

			//Googleara
			/*GARA_ARANIYOR: "",
			GARA_BASARI: () => ``,
			GARA_BULUNAMADI: ,*/

			//Geribildirim
			GBILDIR_YOK: (un) => `<:basarisiz:487418569538273291>Geribildirmek istediğin konu nedir ${un}`,
			GBILDIR_TSK: (un) => `Yardim için tesekkürler, ${un}`,

			//Market
			MARKET_HATA: "Bir hata oluştu daha sonra tekrar dene.",
			MARKET_TITLE: "HusnuBot Market",
			MARKET_PARAN: (para) => `Paran: ${para}`,
			MARKET_ILK: "Özel Söv Cevabı:",
			MARKET_ILKDESC: "Kendinize özel söv cevabı, artık size sövemezler. | Ürün kodu: ozelsov", //URUN KODLARI DEGISMEZ
			MARKET_FOOTER: "Markete eklenmesini istediğiniz şeyleri ?geribildirim olarak gönderin. • © HusnuBot",
			MARKET_PARANYOK: "Yeterli paran yok.",
			MARKET_ZATENVAR: "Sende zaten bu ürün var!",
			MARKET_ILKBASARI: "Başarılı! Artık ?sovcevap komudu ile kendi söv cevabını değiştirebilirsin!",

			//Sovcevap
			SCEVAP_SATINAL: "Bu özelliği kullanabilmek için satın alman gerekli.",
			SCEVAP_BASARI: (cevap) => `Başarılı! Bundan sonra sana söv komudunu kullananlar **${cevap}** yanıtı ile karşılaşacak.`,
			SCEVAP_BOS: "Sana sövenler bir şeyle karşılaşmasın mı? Bunun için bu kadar sp harcamış olamazsın. Başka bir şey dene.",

			//Açıklama
			ACKLM_SINIR: "Açıklaman 25 karakterden fazla olamaz.",
			ACKLM_YOK: "Bir açıklama girmen gerekli.",
			ACKLM_BASARI: (baslik) => `***Profil açıklaman şununla değiştirildi:*** ${baslik}`,

			//Gunluk
			GUNLUK_HUSNU: "***Tamam beni seviyorsun ama bu SPlerin kaynağı zaten bende, sen en iyisi başkasına ver.***",
			GUNLUK_BOT: "***Tamam belki benim gibi botları seviyor olabilirsin ama bu onlara SP verebilceğini göstermez!***",
			GUNLUK_KALAN: (saat, dakika, saniye) => `${saat} saat, ${dakika} dakika ve ${saniye} saniye`,
			GUNLUK_BASARI: (odul) => `***Bu gün ${odul} SP kazandın! Her gün 200 SP kazanabilmek için <https://www.husnubot.me/upvote> adresinden oy ver!***`,
			GUNLUK_BASARI_BASKA: (odul, ut) => `***Bu gün ${odul} SP kazandın ve bunu ${ut} adlı kullanıcıya verdin! Her gün 200 SP kazanabilmek için <https://www.husnubot.me/upvote> adresinden oy ver!***`,
			GUNLUK_KALANMESAJ: (kalan) => `***SP olarak maaşını ${kalan} içinde tekrar alabilirsin!***`,

			//Profil
			PRFIL_BOT: "Botların profillerini kayıt altında tutmuyorum. Sonuçta onlar bot, benim sanal param ile ne yapabilirler ki?",
			PRFIL_YUKLENIYOR: "<a:loading:393852367751086090> ***Bana biraz izin ver...***",
			PRFIL_SP: (sp) => `SP Sayısı: ${sp}`,
			PRFIL_REF: (refs) => `Referans: ${refs}`,
			PRFIL_BASLIK: (baslik) => `Açıklama: ${baslik}`,
			PRFIL_SEVIYE: (seviye) => `Seviye: ${seviye}`,
			PRFIL_XP: (xp, nl) => `Deneyim: ${xp} / ${nl}`,

			//Ref
			REF_KENDI: "***Kendine referans verirsen bu biraz saçma olur sanki ?***",
			REF_HUSNU: "***Tamam beni seviyorsun ama bu puanların kaynağı zaten bende, sen en iyisi başkasına ver.***",
			REF_BOT: "***Tamam belki benim gibi botları seviyor olabilirsin ama bu onlara referans puanı verebilceğini göstermez!***",
			REF_KALAN: (saat, dakika, saniye) => `${saat} saat, ${dakika} dakika ve ${saniye} saniye`,
			REF_VEREBILIRSIN: "***Artık referans puanı verebilirsin!***",
			REF_BASARI: (user) => `***${user} adlı kullanıcıya bir referans puanı verdin!***`,
			REF_KALANMESAJ: (zaman) => `***Başka bir referans puanı vermek için ${zaman} beklemen gerekli!***`,

			//Sov
			SOV_KUFUR:[
					"sana çok kötü küfür ederim de dua et githubdayız, bütün küfürleri buraya yazamıyorum.",
          "bu da başka bi küfür aslında, kafanın içindeyim."
          ],
			//Argumanlar

			//Varsayılanlar
			RESOLVER_INVALID_PIECE: (name, piece) => `${name} herhangi bir ${piece} olması gerekiyor.`,
			RESOLVER_INVALID_MESSAGE: (name) => `${name} geçerli bir mesaj ID'si olması gerekiyor`,
			RESOLVER_INVALID_USER: (name) => `${name} geçerli bir mention veya kullanıcı ID'si olması gerekiyor.`,
			RESOLVER_INVALID_MEMBER: (name) => `${name} geçerli bir mention veya kullanıcı ID'si olması gerekiyor.`,
			RESOLVER_INVALID_CHANNEL: (name) => `${name} geçerli bir kanal etiketi veya kanal ID'si olması gerekiyor.`,
			RESOLVER_INVALID_GUILD: (name) => `${name} geçerli bir guild ID'si olması gerekiyor`,
			RESOLVER_INVALID_ROLE: (name) => `${name} geçerli bir rol ID'si veya mentionu olması gerekiyor.`,
			RESOLVER_INVALID_LITERAL: (name) => `${name}: Olması beklenen bir değer değil`,
			RESOLVER_INVALID_BOOL: (name) => `${name} true yada false olması gerekiyor`,
			RESOLVER_INVALID_INT: (name) => `${name} bir tamsayı olması gerekiyor.`,
			RESOLVER_INVALID_FLOAT: (name) => `${name} bir sayı olması gerekiyor`,
			RESOLVER_INVALID_REGEX_MATCH: (name, pattern) => `${name} \`${pattern}\` regex paterni ile eşleşmiyor.`,
			RESOLVER_INVALID_URL: (name) => `${name} geçerli bir url olması gerekiyor.`,
			RESOLVER_INVALID_STRING: (name) => `${name} geçerli bir yazı olması gerekiyor.`,
			RESOLVER_STRING_SUFFIX: ' karakterler',
			RESOLVER_MINMAX_EXACTLY: (name, min, suffix) => `${name} tamamen ${min}${suffix} şeklinde olması gerekiyor.`,
			RESOLVER_MINMAX_BOTH: (name, min, max, suffix) => `${name}: ${min} ve ${max}${suffix} arasında olması gerekiyor.`,
			RESOLVER_MINMAX_MIN: (name, min, suffix) => `${name}: ${min}${suffix}'den-'dan büyük olması gerekiyor.`,
			RESOLVER_MINMAX_MAX: (name, max, suffix) => `${name}: ${max}${suffix}'den-'dan küçük olması gerekiyor.`,
			RESOLVER_INVALID_CUSTOM: (name, type) => `${name} geçerli bir ${type} olması gerkli.`,
			RESOLVER_INVALID_EMOJI: (name) => `${name} geçerli bir özel emoji tagı veya bir emoji ID'si olmalı.`,
			RESOLVER_INVALID_DATE: (name) => `${name} geçerli bir tarih olması gerekli.`,
			RESOLVER_INVALID_DURATION: (name) => `${name} geçerli bir zaman olması gerekli.`,
			RESOLVER_INVALID_TIME: (name) => `${name} geçerli bir zaman veya tarih olması gerkli.`,

			
			
			//Rolename
			RLNAME_GECERSIZ: (isim) => `${isim} geçerli bir rol ismi ID'si veya etiketi olmalı`,
			RLNAME_FAZLA: (roller) => `Birden fazla rol bulundu: \`${roller}\``,

			//Username
			UNAME_GECERSIZ: (isim) => `${isim} geçerli bir kullanıcı ismi ID'si veya etiketi olmalı`,
			UNAME_FAZLA: (kullanici) => `Birden fazla kullanıcı bulundu: \`${kullanici}\``,

			//Sarki
			SNAME_SUNUCUYOK: 'Discord sunucun için kendi sunucularımda uygun bir müzik sunucusu bulamadım, sunucunun bulunduğu bölgeyi değiştirmelisin. Yardım için "?yardım" komudunu kullanarak destek sunucumuza gelebilirsin.',
			SNAME_BULUNAMADI: "Bulunamadı.",
			SNAME_GECERSIZ: "Geçersiz seçenek. Lütfen 1 ve 5 sayıları arasında seçim yapınız.",
			SNAME_SARKISEC: "<:muzik:489064218365263882> | **Bir şarkı seç!**\n",
			SNAME_ARASI: (author) => `\n${author}, Lütfen kuyruğa eklemek için \`1-5\` arasında numara ile cevap vererek şarkıyı seç.`,

			//TextPrompt
			IPTAL: "iptal"

			// 	 _   _ _   _ ____  _   _ _   _
			//	| | | | | | / ___|| \ | | | | |
			//	| |_| | | | \___ \|  \| | | | |
			//	|  _  | |_| |___) | |\  | |_| |
			//	|_| |_|\___/|____/|_| \_|\___/
		};
	}

	async init() {
		await super.init();
	}
}
