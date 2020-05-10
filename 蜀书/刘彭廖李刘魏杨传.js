const 内容 = Object.freeze([
'刘封者，本罗侯寇氏之子，长沙刘氏之甥也。先主至荆州，以未有继嗣，养封为子。及先主入蜀，自葭萌还攻刘璋，时封年二十馀，有武艺，气力过人，将兵俱与诸葛亮、张飞等溯流西上，所在战克。益州既定，以封为副军中郎将。',
'初，刘璋遣扶风孟达副法正，各将兵二千人，使迎先主，先主因令达并领其众，留屯江陵。蜀平后，以达为宜都太守。建安二十四年，命达从秭归北攻房陵，房陵太守蒯祺为达兵所害。达将进攻上庸，先主阴恐达难独任，乃遣封自汉中乘沔水下统达军，与达会上庸。上庸太守申耽举众降，遣妻子及宗族诣成都。先主加耽征北将军，领上庸太守员乡侯如故，以耽弟仪为建信将军、西城太守，迁封为副军将军。自关羽围樊城、襄阳，连呼封、达，令发兵自助。封、达辞以山郡初附，未可动摇，不承羽命。会羽覆败，先主恨之。又封与达忿争不和，封寻夺达鼓吹。达既惧罪，又忿恚封，遂表辞先主，率所领降魏。魏文帝善达之姿才容观，以为散骑常侍、建武将军，封平阳亭侯。合房陵、上庸、西城三郡为新城郡，以达领新城太守。遣征南将军夏侯尚、右将军徐晃与达共袭封。达与封书曰：古人有言：‘疏不间亲，新不加旧。’此谓上明下直，谗慝不行也。若乃权君谲主，贤父慈亲，犹有忠臣蹈功以罹祸，孝子抱仁以陷难，种、商、白起、孝己、伯奇，皆其类也。其所以然，非骨肉好离，亲亲乐患也。或有恩移爱易，亦有谗间其间，虽忠臣不能移之於君，孝子不能变之於父者也。势利所加，改亲为雠，况非亲亲乎！故申生、卫伋、御寇、楚建禀受形之气，当嗣立之正，而犹如此。今足下与汉中王，道路之人耳，亲非骨血而据势权，义非君臣而处上位，征则有偏任之威，居则有副军之号，远近所闻也。自立阿斗为太子已来，有识之人相为寒心。如使申生从子舆之言，必为太伯；卫伋听其弟之谋，无彰父之讥也。',
'且小白出奔，入而为霸；重耳逾垣，卒以克复。自古有之，非独今也。',
'夫智贵免祸，明尚夙达，仆揆汉中王虑定於内，疑生於外矣；虑定则心固，疑生则心惧，乱祸之兴作，未曾不由废立之间也。私怨人情，不能不见，恐左右必有以间於汉中王矣。然则疑成怨闻，其发若践机耳。今足下在远，尚可假息一时；若大军遂进，足下失据而还，窃相为危之。昔微子去殷，智果别族，违难背祸，犹皆如斯。今足下弃父母而为人后，非礼也；知祸将至而留之，非智也；见正不从而疑之，非义也。自号为丈夫，为此三者，何所贵乎？以足下之才，弃身来东，继嗣罗侯，不为背亲也；北面事君，以正纲纪，不为弃旧也；怒不致乱，以免危亡，不为徒行也。加陛下新受禅命，虚心侧席，以德怀远，若足下翻然内向，非但与仆为伦，受三百户封，继统罗国而已，当更剖符大邦，为始封之君。陛下大军，金鼓以震，当转都宛、邓；若二敌不平，军无还期。足下宜因此时早定良计。易有‘利见大人’，诗有‘自求多福’，行矣。今足下勉之，无使狐突闭门不出。封不从达言。',
'申仪叛封，封破走还成都。申耽降魏，魏假耽怀集将军，徙居南阳，仪魏兴太守，封员乡侯，屯洵口。封既至，先主责封之侵陵达，又不救羽。诸葛亮虑封刚猛，易世之后终难制御，劝先主因此除之。於是赐封死，使自裁。封叹曰：“恨不用孟子度之言！”先主为之流涕。达本字子敬，避先主叔父敬，改之。',
'彭羕字永年，广汉人。身长八尺，容貌甚伟。姿性骄傲，多所轻忽，惟敬同郡秦子敕，荐之於太守许靖曰：“昔高宗梦傅说，周文求吕尚，爰及汉祖，纳食其於布衣，此乃帝王之所以倡业垂统，缉熙厥功也。今明府稽古皇极，允执神灵，体公刘之德，行勿翦之惠，清庙之作於是乎始，褒贬之义於是乎兴，然而六翮未之备也。伏见处士绵竹秦宓，膺山甫之德，履隽生之直，枕石漱流，吟咏缊袍，偃息於仁义之途，恬淡於浩然之域，高概节行，守真不亏，虽古人潜遁，蔑以加旃。若明府能招致此人，必有忠谠落落之誉，丰功厚利，建迹立勋，然后纪功於王府，飞声於来世，不亦美哉！”',
'羕仕州，不过书佐，后又为众人所谤毁於州牧刘璋，璋髡钳羕为徒隶。会先主入蜀，溯流北行。羕欲纳说先主，乃往见庞统。统与羕非故人，又適有宾客，羕径上统床卧，谓统曰：“须客罢当与卿善谈。”统客既罢，往就羕坐，羕又先责统食，然后共语，因留信宿，至于经日。统大善之，而法正宿自知羕，遂并致之先主。先主亦以为奇，数令羕宣传军事，指授诸将，奉使称意，识遇日加。成都既定，先主领益州牧，拔羕为治中从事。羕起徒步，一朝处州人之上，形色嚣然，自矜得遇滋甚。诸葛亮虽外接待羕，而内不能善。屡密言先主，羕心大志广，难可保安。先主既敬信亮，加察羕行事，意以稍疏，左迁羕为江阳太守。',
'羕闻当远出，私情不悦，往诣马超。超问羕曰：“卿才具秀拔，主公相待至重，谓卿当与孔明、孝直诸人齐足并驱，宁当外授小郡，失人本望乎？”羕曰：“老革荒悖，可复道邪！”又谓超曰：“卿为其外，我为其内，天下不足定也。”超羁旅归国，常怀危惧，闻羕言大惊，默然不答。',
'羕退，具表羕辞，於是收羕付有司。',
'羕於狱中与诸葛亮书曰：“仆昔有事於诸侯，以为曹操暴虐，孙权无道，振威闇弱，其惟主公有霸王之器，可与兴业致治，故乃翻然有轻举之志。会公来西，仆因法孝直自衒鬻，庞统斟酌其间，遂得诣公於葭萌，指掌而谭，论治世之务，讲霸王之义，建取益州之策，公亦宿虑明定，即相然赞，遂举事焉。仆於故州不免凡庸，忧於罪罔，得遭风云激矢之中，求君得君，志行名显，从布衣之中擢为国士，盗窃茂才。分子之厚，谁复过此。羕一朝狂悖，自求菹醢，为不忠不义之鬼乎！先民有言，左手据天下之图，右手刎咽喉，愚夫不为也。况仆颇别菽麦者哉！所以有怨望意者，不自度量，苟以为首兴事业，而有投江阳之论，不解主公之意，意卒感激，颇以被酒，侻失‘老’语。此仆之下愚薄虑所致，主公实未老也。且夫立业，岂在老少，西伯九十，宁有衰志，负我慈父，罪有百死。至於内外之言，欲使孟起立功北州，戮力主公，共讨曹操耳，宁敢有他志邪？孟起说之是也，但不分别其间，痛人心耳。昔每与庞统共相誓约，庶讬足下末踪，尽心於主公之业，追名古人，载勋竹帛。统不幸而死，仆败以取祸。自我堕之，将复谁怨！足下，当世伊、吕也，宜善与主公计事，济其大猷。天明地察，神祇有灵，复何言哉！贵使足下明仆本心耳。行矣努力，自爱，自爱！”羕竟诛死，时年三十七。',
'廖立字公渊，武陵临沅人。先主领荆州牧，辟为从事，年未三十，擢为长沙太守。先主入蜀，诸葛亮镇荆土，孙权遣使通好於亮，因问士人皆谁相经纬者，亮答曰：“庞统、廖立，楚之良才，当赞兴世业者也。”建安二十年，权遣吕蒙奄袭南三郡，立脱身走，自归先主。先主素识待之，不深责也，以为巴郡太守。二十四年，先主为汉中王，徵立为侍中。后主袭位，徙长水校尉。',
'立本意，自谓才名宜为诸葛亮之贰，而更游散在李严等下，常怀怏怏。后丞相掾李邵、蒋琬至，立计曰：“军当远出，卿诸人好谛其事。昔先帝不取汉中，走与吴人争南三郡，卒以三郡与吴人，徒劳役吏士，无益而还。既亡汉中，使夏侯渊、张郃深入于巴，几丧一州。后至汉中，使关侯身死无孑遗，上庸覆败，徒失一方。是羽怙恃勇名，作军无法，直以意突耳，故前后数丧师众也。如向朗、文恭，凡俗之人耳。恭作治中无纲纪；朗昔奉马良兄弟，谓为圣人，今作长史，素能合道。中郎郭演长，从人者耳，不足与经大事，而作侍中。今弱世也，欲任此三人，为不然也。王连流俗，苟作掊克，使百姓疲弊，以致今日。”',
'邵、琬具白其言於诸葛亮。亮表立曰：“长水校尉廖立，坐自贵大，臧否群士，公言国家不任贤达而任俗吏，又言万人率者皆小子也；诽谤先帝，疵毁众臣。人有言国家兵众简练，部伍分明者，立举头视屋，愤咤作色曰：‘何足言！’凡如是者不可胜数。羊之乱群，犹能为害，况立讬在大位，中人以下识真伪邪？”於是废立为民，徙汶山郡。立躬率妻子耕殖自守，闻诸葛亮卒，垂泣叹曰：“吾终为左衽矣！”后监军姜维率偏军经汶山、诣立，称立意气不衰，言论自若。立遂终徙所。妻子还蜀。',
'李严字正方，南阳人也。少为郡职吏，以才幹称。荆州牧刘表使历诸郡县。',
'曹公入荆州时，严宰秭归，遂西诣蜀，刘璋以为成都令，复有能名。建安十八年，署严为护军，拒先主於绵竹。严率众降先主，先主拜严裨将军。成都既定，为犍为太守、兴业将军。二十三年，盗贼马秦、高胜等起事於郪，合聚部伍数万人，到资中县。时先主在汉中，严不更发兵，但率将郡士五千人讨之，斩秦、胜等首。枝党星散，悉复民籍。又越巂夷率高定遣军围新道县，严驰往赴救，贼皆破走。加辅汉将军，领郡如故。章武二年，先主徵严诣永安宫，拜尚书令。三年，先主疾病，严与诸葛亮并受遗诏辅少主；以严为中都护，统内外军事，留镇永安。建兴元年，封都乡侯，假节，加光禄勋。四年，转为前将军。以诸葛亮欲出军汉中，严当知后事，移屯江州，留护军陈到驻永安，皆统属严。严与孟达书曰：“吾与孔明俱受寄讬，忧深责重，思得良伴。”亮亦与达书曰：“部分如流，趋舍罔滞，正方性也。”其见贵重如此。八年，迁骠骑将军。以曹真欲三道向汉川，亮命严将二万人赴汉中。亮表严子丰为江州都督督军，典严后事。亮以明年当出军，命严以中都护署府事。严改名为平。',
'九年春，亮军祁山，平催督运事。秋夏之际，值天霖雨，运粮不继，平遣参军狐忠、督军成藩喻指，呼亮来还；亮承以退军。平闻军退，乃更阳惊，说“军粮饶足，何以便归”！欲以解己不办之责，显亮不进之愆也。又表后主，说“军伪退，欲以诱贼与战”。亮具出其前后手笔书疏本末，平违错章灼。平辞穷情竭，首谢罪负。於是亮表平曰：“自先帝崩后，平所在治家，尚为小惠，安身求名，无忧国之事。臣当北出，欲得平兵以镇汉中，平穷难纵横，无有来意，而求以五郡为巴州刺史。去年臣欲西征，欲令平主督汉中，平说司马懿等开府辟召。臣知平鄙情，欲因行之际偪臣取利也，是以表平子丰督主江州，隆崇其遇，以取一时之务。平至之日，都委诸事，群臣上下皆怪臣待平之厚也。正以大事未定，汉室倾危，伐平之短，莫若褒之。然谓平情在於荣利而已，不意平心颠倒乃尔。若事稽留，将致祸败，是臣不敏，言多增咎。”乃废平为民，徙梓潼郡。十二年，平闻亮卒，发病死。平常冀亮当自补复，策后人不能，故以激愤也。丰官至朱提太守。',
'刘琰字威硕，鲁国人也。先主在豫州，辟为从事，以其宗姓，有风流，善谈论，厚亲待之，遂随从周旋，常为宾客。先主定益州，以琰为固陵太守。后主立，封都乡侯，班位每亚李严，为卫尉中军师后将军，迁车骑将军。然不豫国政，但领兵千馀，随丞相亮讽议而已。车服饮食，号为侈靡，侍婢数十，皆能为声乐，又悉教诵读鲁灵光殿赋。建兴十年，与前军师魏延不和，言语虚诞，亮责让之。',
'琰与亮笺谢曰：“琰禀性空虚，本薄操行，加有酒荒之病，自先帝以来，纷纭之论，殆将倾覆。颇蒙明公本其一心在国，原其身中秽垢，扶持全济，致其禄位，以至今日。间者迷醉，言有违错，慈恩含忍，不致之于理，使得全完，保育性命。',
'虽必克己责躬，改过投死，以誓神灵；无所用命，则靡寄颜。”於是亮遣琰还成都，官位如故。',
'琰失志慌惚。十二年正月，琰妻胡氏入贺太后，太后令特留胡氏，经月乃出。',
'胡氏有美色，琰疑其与后主有私，呼五百挝胡，至於以履搏面，而后弃遣。',
'胡具以告言琰，琰坐下狱。有司议曰：“卒非挝妻之人，面非受履之地。”琰竟弃市。自是大臣妻母朝庆遂绝。',
'魏延字文长，义阳人也。以部曲随先主入蜀，数有战功，迁牙门将军。先主为汉中王，迁治成都，当得重将以镇汉川，众论以为必在张飞，飞亦以心自许。',
'先主乃拔延为督汉中镇远将军，领汉中太守，一军尽惊。先主大会群臣，问延曰：“今委卿以重任，卿居之欲云何？”延对曰：“若曹操举天下而来，请为大王拒之；偏将十万之众至，请为大王吞之。”先主称善，众咸壮其言。先主践尊号，进拜镇北将军。建兴元年，封都亭侯。五年，诸葛亮驻汉中，更以延为督前部，领丞相司马、凉州刺史，八年，使延西入羌中，魏后将军费瑶、雍州刺史郭淮与延战于阳谿，延大破淮等，迁为前军师征西大将军，假节，进封南郑侯。',
'延每随亮出，辄欲请兵万人，与亮异道会于潼关，如韩信故事，亮制而不许。',
'延常谓亮为怯，叹恨己才用之不尽。延既善养士卒，勇猛过人，又性矜高，当时皆避下之。唯杨仪不假借延，延以为至忿，有如水火。十二年，亮出北谷口，延为前锋。出亮营十里，延梦头上生角，以问占梦赵直，直诈延曰：“夫麒麟有角而不用，此不战而贼欲自破之象也。”退而告人曰：“角之为字，刀下用也；头上用刀，其凶甚矣。”',
'秋，亮病困，密与长史杨仪、司马费祎、护军姜维等作身殁之后退军节度，令延断后，姜维次之；若延或不从命，军便自发。亮適卒，秘不发丧，仪令祎往揣延意指。延曰：“丞相虽亡，吾自见在。府亲官属便可将丧还葬，吾自当率诸军击贼，云何以一人死废天下之事邪？且魏延何人，当为杨仪所部勒，作断后将乎！”因与祎共作行留部分，令祎手书与己连名，告下诸将。祎绐延曰：“当为君还解杨长史，长史文吏，稀更军事，必不违命也。”祎出门驰马而去，延寻悔，追之已不及矣。延遣人觇仪等，遂使欲案亮成规，诸营相次引军还。延大怒，搀仪未发，率所领径先南归，所过烧绝阁道。延、仪各相表叛逆，一日之中，羽檄交至。后主以问侍中董允、留府长史蒋琬，琬、允咸保仪疑延。仪等槎山通道，昼夜兼行，亦继延后。延先至，据南谷口，遣兵逆击仪等，仪等令何平在前御延。平叱延先登曰：“公亡，身尚未寒，汝辈何敢乃尔！”延士众知曲在延，莫为用命，军皆散。延独与其子数人逃亡，奔汉中。仪遣马岱追斩之，致首於仪，仪起自踏之，曰：“庸奴！复能作恶不？”遂夷延三族。初，蒋琬率宿卫诸营赴难北行，行数十里，延死问至，乃旋。原延意不北降魏而南还者，但欲除杀仪等。平日诸将素不同，冀时论必当以代亮。本指如此。不便背叛。',
'杨仪字威公，襄阳人也。建安中，为荆州刺史傅群主簿，背群而诣襄阳太守关羽。羽命为功曹，遣奉使西诣先主。先主与语论军国计策，政治得失，大悦之，因辟为左将军兵曹掾。及先主为汉中王，拔仪为尚书。先主称尊号，东征吴，仪与尚书令刘巴不睦，左迁遥署弘农太守。建兴三年，丞相亮以为参军，署府事，将南行。五年，随亮汉中。八年，迁长史，加绥军将军。亮数出军，仪常规画分部，筹度粮谷，不稽思虑，斯须便了。军戎节度，取办於仪。亮深惜仪之才幹，凭魏延之骁勇，常恨二人之不平，不忍有所偏废也。十二年，随亮出屯谷口。亮卒于敌场。仪既领军还，又诛讨延，自以为功勋至大，宜当代亮秉政，呼都尉赵正以周易筮之，卦得家人，默然不悦。而亮平生密指，以仪性狷狭，意在蒋琬，琬遂为尚书令、益州刺史。仪至，拜为中军师，无所统领，从容而已。',
'初，仪为先主尚书，琬为尚书郎，后虽俱为丞相参军长史，仪每从行，当其劳剧，自惟年宦先琬，才能逾之，於是怨愤形于声色，叹咤之音发於五内。时人畏其言语不节，莫敢从也，惟后军师费祎往慰省之。仪对祎恨望，前后云云，又语祎曰：“往者丞相亡没之际，吾若举军以就魏氏，处世宁当落度如此邪！令人追悔不可复及。”祎密表其言。十三年，废仪为民，徙汉嘉郡。仪至徙所，复上书诽谤，辞指激切，遂下郡收仪。仪自杀，其妻子还蜀。',
'评曰：刘封处嫌疑之地，而思防不足以自卫。彭羕、廖立以才拔进，李严以幹局达，魏延以勇略任，杨仪以当官显，刘琰旧仕，并咸贵重。览其举措，迹其规矩，招祸取咎，无不自己也。',
])

exports.内容 = 内容