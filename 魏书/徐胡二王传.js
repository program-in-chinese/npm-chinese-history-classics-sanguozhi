const 内容 = Object.freeze([
'徐邈字景山，燕国蓟人也。太祖平河朔，召为丞相军谋掾，试守奉高令，入为东曹议令史。魏国初建，为尚书郎。时科禁酒，而邈私饮至於沈醉。校事赵达问以曹事，邈曰：“中圣人。”达白之太祖，太祖甚怒。度辽将军鲜于辅进曰：“平日醉客谓酒清者为圣人，浊者为贤人，邈性脩慎，偶醉言耳。”竟坐得免刑。',
'后领陇西太守，转为南安。文帝践阼，历谯相，平阳、安平太守，颍川典农中郎将，所在著称，赐爵关内侯。车驾幸许昌，问邈曰：“颇复中圣人不？”邈对曰：“昔子反毙於谷阳，御叔罚於饮酒，臣嗜同二子，不能自惩，时复中之。然宿瘤以丑见传，而臣以醉见识。”帝大笑，顾左右曰：“名不虚立。”迁抚军大将军军师。',
'明帝以凉州绝远，南接蜀寇，以邈为凉州刺史，使持节领护羌校尉。至，值诸葛亮出祁山，陇右三郡反，邈辄遣参军及金城太守等击南安贼，破之。河右少雨，常苦乏谷，邈上脩武威、酒泉盐池以收虏谷，又广开水田，募贫民佃之，家家丰足，仓库盈溢。乃支度州界军用之馀，以市金帛犬马，通供中国之费。以渐收敛民间私仗，藏之府库。然后率以仁义，立学明训，禁厚葬，断淫祀，进善黜恶，风化大行，百姓归心焉。西域流通，荒戎入贡，皆邈勋也。讨叛羌柯吾有功，封都亭侯，邑三百户，加建威将车。邈与羌、胡从事，不问小过；若犯大罪，先告部帅，使知，应死者乃斩以徇，是以信服畏威。赏赐皆散与将士，无入家者，妻子衣食不充；天子闻而嘉之，随时供给其家。弹邪绳枉，州界肃清。',
'正始元年，还为大司农。迁为司隶校尉，百寮敬惮之。公事去官。后为光禄大夫，数岁即拜司空，邈叹曰：“三公论道之官，无其人则缺，岂可以老病忝之哉？”遂固辞不受。嘉平元年，年七十八，以大夫薨于家，用公礼葬，谥曰穆侯。',
'子武嗣。六年，朝廷追思清节之士，诏曰：“夫显贤表德，圣王所重；举善而教，仲尼所美。故司空徐邈、征东将军胡质、卫尉田豫皆服职前朝，历事四世，出统戎马，入赞庶政，忠清在公，忧国忘私，不营产业，身没之后，家无馀财，朕甚嘉之。其赐邈等家谷二千斛，钱三十万，布告天下。”邈同郡韩观曼游，有鉴识器幹，与邈齐名，而在孙礼、卢毓先，为豫州刺史，甚有治功，卒官。',
'卢钦著书，称邈曰：“徐公志高行絜，才博气猛。其施之也，高而不狷，絜而不介，博而守约，猛而能宽。圣人以清为难，而徐公之所易也。”或问钦：“徐公当武帝之时，人以为通，自在凉州及还京师，人以为介，何也？”钦答曰；“往者毛孝先、崔季珪等用事，贵清素之士，于时皆变易车服以求名高，而徐公不改其常，故人以为通。比来天下奢靡，转相仿效，而徐公雅尚自若，不与俗同，故前日之通，乃今日之介也。是世人之无常，而徐公之有常也。”',
'胡质字文德，楚国寿春人也。少与蒋济、朱绩俱知名於江、淮间，仕州郡。',
'蒋济为别驾，使见太祖。太祖问曰：“胡通达，长者也，宁有子孙不？”济曰：“有子曰质，规模大略不及於父，至於精良综事过之。”太祖即召质为顿丘令。县民郭政通於从妹，杀其夫程他，郡吏冯谅系狱为证。政与妹皆耐掠隐抵，谅不胜痛，自诬，当反其罪。质至官，察其情色，更详其事，检验具服。',
'入为丞相东曹议令史，州请为治中。将军张辽与其护军武周有隙。辽见刺史温恢求请质，质辞以疾。辽出谓质曰：“仆委意於君，何以相辜如此？”质曰：“古人之交也，取多知其不贪，奔北知其不怯，闻流言而不信，故可终也。武伯南身为雅士，往者将军称之不容於口，今以睚眦之恨，乃成嫌隙。况质才薄，岂能终好？是以不愿也。”辽感言，复与周平。',
'太祖辟为丞相属。黄初中，徙吏部郎，为常山太守，迁任东莞。士卢显为人所杀，质曰：“此士无雠而有少妻，所以死乎！”悉见其比居年少，书吏李若见问而色动，遂穷诘情状。若即自首，罪人斯得。每军功赏赐，皆散之於众，无入家者。在郡九年，吏民便安，将士用命。',
'迁荆州刺史，加振威将军，赐爵关内侯。吴大将朱然围樊城，质轻军赴之。',
'议者皆以为贼盛不可迫，质曰：“樊城卑下，兵少，故当进军为之外援；不然，危矣。”遂勒兵临围，城中乃安。迁征东将军，假节都督青、徐诸军事。广农积谷，有兼年之储，置东征台，且佃且守。又通渠诸郡，利舟楫，严设备以待敌。',
'海边无事。',
'性沉实内察，不以其节检物，所在见思。嘉平二年薨，家无馀财，惟有赐衣书箧而已。军师以闻，追进封阳陵亭侯，邑百户，谥曰贞侯。子威嗣。六年，诏书褒述质清行，赐其家钱谷。语在徐邈传。威，咸熙中官至徐州刺史，有殊绩，历三郡守，所在有名。卒於安定。',
'王昶字文舒，太原晋阳人也。少与同郡王凌俱知名。凌年长，昶兄事之。文帝在东宫，昶为太子文学，迁中庶子。文帝践阼，徙散骑侍郎，为洛阳典农。时都畿树木成林，昶斫开荒莱，勤劝百姓，垦田特多。迁兖州刺史。明帝即位，加扬烈将军，赐爵关内侯。昶虽在外任，心存朝廷，以为魏承秦、汉之弊，法制苛碎，不大釐改国典以准先王之风，而望治化复兴，不可得也。乃著治论，略依古制而合於时务者二十馀篇，又著兵书十馀篇，言奇正之用，青龙中奏之。',
'其为兄子及子作名字，皆依谦实，以见其意，故兄子默字处静，沈字处道，其子浑字玄冲，深字道冲。遂书戒之曰：夫人为子之道，莫大於宝身全行，以显父母。此三者人知其善，而或危身破家，陷于灭亡之祸者，何也？由所祖习非其道也。夫孝敬仁义，百行之首，行之而立，身之本也。孝敬则宗族安之，仁义则乡党重之，此行成於内，名著于外者矣。人若不笃於至行，而背本逐末，以陷浮华焉，以成朋党焉；浮华则有虚伪之累，朋党则有彼此之患。此二者之戒，昭然著明，而循覆车滋众，逐末弥甚，皆由惑当时之誉，昧目前之利故也。夫富贵声名，人情所乐，而君子或得而不处，何也？恶不由其道耳。患人知进而不知退，知欲而不知足，故有困辱之累，悔吝之咨。语曰：“如不知足，则失所欲。”故知足之足常足矣。览往事之成败，察将来之吉凶，未有干名要利，欲而不厌，而能保世持家，永全福禄者也。欲使汝曹立身行己，遵儒者之教，履道家之言，故以玄默冲虚为名，欲使汝曹顾名思义，不敢违越也。古者盘杅有铭，几杖有诫，俯仰察焉，用无过行；况在己名，可不戒之哉！夫物速成则疾亡，晚就则善终。朝华之草，夕而零落；松柏之茂，隆寒不衰。是以大雅君子恶速成，戒阙党也。若范匄对秦客而武子击之，折其委笄，恶其掩人也。夫人有善鲜不自伐，有能者寡不自矜；伐则掩人，矜则陵人。掩人者人亦掩之，陵人者人亦陵之。故三郤为戮于晋，王叔负罪於周，不惟矜善自伐好争之咎乎？故君子不自称，非以让人，恶其盖人也。夫能屈以为伸，让以为得，弱以为强，鲜不遂矣。夫毁誉，爱恶之原而祸福之机也，是以圣人慎之。孔子曰：“吾之於人，谁毁谁誉；如有所誉，必有所试。”又曰：“子贡方人。赐也贤乎哉，我则不暇。”以圣人之德，犹尚如此，况庸庸之徒而轻毁誉哉？昔伏波将军马援戒其兄子，言：“闻人之恶，当如闻父母之名；耳可得而闻，口不可得而言也。”斯戒至矣。人或毁己，当退而求之於身。若己有可毁之行，则彼言当矣；若己无可毁之行，则彼言妄矣。当则无怨于彼，妄则无害於身，又何反报焉？且闻人毁己而忿者，恶丑声之加人也，人报者滋甚，不如默而自脩己也。谚曰：“救寒莫如重裘，止谤莫如自脩。”斯言信矣。若与是非之士，凶险之人，近犹不可，况与对校乎？其害深矣。夫虚伪之人，言不根道，行不顾言，其为浮浅较可识别；而世人惑焉，犹不检之以言行也。近济阴魏讽、山阳曹伟皆以倾邪败没，荧惑当世，挟持奸慝，驱动后生。虽刑於鈇钺，大为炯戒，然所汙染，固以众矣。可不慎与！',
'若夫山林之士，夷、叔之伦，甘长饥於首阳，安赴火於绵山，虽可以激贪励俗，然圣人不可为，吾亦不愿也。今汝先人世有冠冕，惟仁义为名，守慎为称，孝悌於闺门，务学於师友。吾与时人从事，虽出处不同，然各有所取。颍川郭伯益，好尚通达，敏而有知。其为人弘旷不足，轻贵有馀；得其人重之如山，不得其人忽之如草。吾以所知亲之昵之，不愿儿子为之。',
'北海徐伟长，不治名高，不求苟得，澹然自守，惟道是务。其有所是非，则讬古人以见其意，当时无所褒贬。吾敬之重之，愿儿子师之。东平刘公幹，博学有高才，诚节有大意，然性行不均，少所拘忌，得失足以相补。吾爱之重之，不愿儿子慕之。乐安任昭先，淳粹履道，内敏外恕，推逊恭让，处不避洿，怯而义勇，在朝忘身。吾友之善之，愿儿子遵之。若引而伸之，触类而长之，汝其庶几举一隅耳。及其用财先九族，其施舍务周急，其出入存故老，其论议贵无贬，其进仕尚忠节，其取人务实道，其处世戒骄淫，其贫贱慎无戚，其进退念合宜，其行事加九思，如此而已。吾复何忧哉？青龙四年，诏“欲得有才智文章，谋虑渊深，料远若近，视昧而察，筹不虚运，策弗徒发，端一小心，清脩密静，乾乾不解，志尚在公者，无限年齿，勿拘贵贱，卿校已上各举一人”。太尉司马宣王以昶应选。正始中，转在徐州，封武观亭侯，迁征南将军，假节都督荆、豫诸军事。昶以为国有常众，战无常胜；地有常险，守无常势。今屯宛，去襄阳三百馀里，诸军散屯，船在宣池，有急不足相赴，乃表徙治新野，习水军于二州，广农垦殖，仓谷盈积。',
'嘉平初，太傅司马宣王既诛曹爽，乃奏博问大臣得失。昶陈治略五事：其一，欲崇道笃学，抑绝浮华，使国子入太学而脩庠序；其二，欲用考试，考试犹准绳也，未有舍准绳而意正曲直，废黜陟而空论能否也；其三，欲令居官者久於其职，有治绩则就增位赐爵；其四，欲约官实禄，励以廉耻，不使与百姓争利；其五，欲绝侈靡，务崇节俭，令衣服有章，上下有叙，储谷畜帛，反民於朴。诏书褒赞。',
'因使撰百官考课事，昶以为唐虞虽有黜陟之文，而考课之法不垂。周制冢宰之职，大计群吏之治而诛赏，又无校比之制。由此言之，圣主明於任贤，略举黜陟之体，以委达官之长，而总其统纪，故能否可得而知也。其大指如此。',
'二年，昶奏：“孙权流放良臣，適庶分争，可乘衅而制吴、蜀；白帝、夷陵之间，黔、巫、秭归、房陵皆在江北，民夷与新城郡接，可袭取也。”乃遣新城太守州泰袭巫、秭归、房陵，荆州刺史王基诣夷陵，昶诣江陵，两岸引竹縆为桥，渡水击之。贼奔南岸，凿七道并来攻。於是昶使积弩同时俱发，贼大将施绩夜遁入江陵城，追斩数百级。昶欲引致平地与合战，乃先遣五军案大道发还，使贼望见以喜之，以所获铠马甲首，驰环城以怒之，设伏兵以待之。绩果追军，与战，克之。绩遁走，斩其将锺离茂、许旻，收其甲首旗鼓珍宝器仗，振旅而还。王基、州泰皆有功。於是迁昶征南大将军、仪同三司，进封京陵侯。毌丘俭、文钦作乱，引兵拒俭、钦有功，封二子亭侯、关内侯，进位骠骑将军。诸葛诞反，昶据夹石以逼江陵，持施绩、全熙使不得东。诞既诛，诏曰：“昔孙膑佐赵，直凑大梁。',
'西兵骤进，亦所以成东征之势也。”增邑千户，并前四千七百户，迁司空，持节、都督如故。甘露四年薨，谥曰穆侯。子浑嗣，咸熙中为越骑校尉。',
'王基字伯舆，东莱曲城人也。少孤，与叔父翁居。翁抚养甚笃，基亦以孝称。',
'年十七，郡召为吏，非其好也，遂去，入琅邪界游学。黄初中，察孝廉，除郎中。',
'是时青土初定，刺史王凌特表请基为别驾，后召为秘书郎，凌复请还。顷之，司徒王朗辟基，凌不遣。朗书劾州曰：“凡家臣之良，则升于公辅，公臣之良，则入于王职，是故古者侯伯有贡士之礼。今州取宿卫之臣，留秘阁之吏，所希闻也。”',
'凌犹不遣。凌流称青土，盖亦由基协和之辅也。大将军司马宣王辟基，未至，擢为中书侍郎。',
'明帝盛脩宫室，百姓劳瘁。基上疏曰：“臣闻古人以水喻民，曰‘水所以载舟，亦所以覆舟’。故在民上者，不可以不戒惧。夫民逸则虑易，苦则思难，是以先王居之以约俭，俾不至於生患。昔颜渊云东野子之御，马力尽矣而求进不已，是以知其将败。今事役劳苦，男女离旷，愿陛下深察东野之弊，留意舟水之喻，息奔驷於未尽，节力役於未困。昔汉有天下，至孝文时唯有同姓诸侯，而贾谊忧之曰：‘置火积薪之下而寝其上，因谓之安也。’今寇贼未殄，猛将拥兵，检之则无以应敌，久之则难以遗后，当盛明之世，不务以除患，若子孙不竞，社稷之忧也。使贾谊复起，必深切于曩时矣。”',
'散骑常侍王肃著诸经传解及论定朝仪，改易郑玄旧说，而基据持玄义，常与抗衡。迁安平太守，公事去官。大将军曹爽请为从事中郎，出为安丰太守。郡接吴寇，为政清严有威惠，明设防备，敌不敢犯。加讨寇将军。吴尝大发众集建业，扬声欲入攻扬州，刺史诸葛诞使基策之。基曰：“昔孙权再至合肥，一至江夏，其后全琮出庐江，朱然寇襄阳，皆无功而还。今陆逊等已死，而权年老，内无贤嗣，中无谋主。权自出则惧内衅卒起，痈疽发溃；遣将则旧将已尽，新将未信。',
'此不过欲补定支党，还自保护耳。”后权竟不能出。时曹爽专柄，风化陵迟，基著时要论以切世事。以疾徵还，起家为河南尹，未拜，爽伏诛，基尝为爽官属，随例罢。',
'其年为尚书，出为荆州刺史，加扬烈将军，随征南王昶击吴。基别袭步协於夷陵，协闭门自守。基示以攻形，而实分兵取雄父邸阁，收米三十馀万斛，虏安北将军谭正，纳降数千口。於是移其降民，置夷陵县。赐爵关内侯。基又表城上昶，徙江夏治之，以偪夏口，由是贼不敢轻越江。明制度，整军农，兼脩学校，南方称之。时朝廷议欲伐吴，诏基量进趣之宜。基对曰：“夫兵动而无功，则威名折於外，财用穷於内，故必全而后用也。若不资通川聚粮水战之备，则虽积兵江内，无必渡之势矣。今江陵有沮、漳二水，溉灌膏腴之田以千数。安陆左右，陂池沃衍。若水陆并农，以实军资，然后引兵诣江陵、夷陵，分据夏口，顺沮、漳，资水浮谷而下。贼知官兵有经久之势，则拒天诛者意沮，而向王化者益固。',
'然后率合蛮夷以攻其内，精卒劲兵以讨其外，则夏口以上必拔，而江外之郡不守。',
'如此，吴、蜀之交绝，交绝而吴禽矣。不然，兵出之利，未可必矣。”於是遂止。',
'司马景王新统政，基书戒之曰：“天下至广，万机至猥，诚不可不矜矜业业，坐而待旦也。夫志正则众邪不生，心静则众事不躁，思虑审定则教令不烦，亲用忠良则远近协服。故知和远在身，定众在心。许允、傅嘏、袁侃、崔赞皆一时正士，有直质而无流心，可与同政事者也。”景王纳其言。',
'高贵乡公即尊位，进封常乐亭侯。毌丘俭、文钦作乱，以基为行监军、假节，统许昌军，適与景王会於许昌。景王曰：“君筹俭等何如？”基曰：“淮南之逆，非吏民思乱也，俭等诳胁迫惧，畏目下之戮，是以尚群聚耳。若大兵临偪，必土崩瓦解，俭、钦之首，不终朝而县於军门矣。”景王曰：“善。”乃令基居军前。',
'议者咸以俭、钦慓悍，难与争锋。诏基停驻。基以为：“俭等举军足以深入，而久不进者，是其诈伪已露，众心疑沮也。今不张示威形以副民望，而停军高垒，有似畏懦，非用兵之势也。若或虏略民人，又州郡兵家为贼所得者，更怀离心；俭等所迫胁者，自顾罪重，不敢复还，此为错兵无用之地，而成奸宄之源。吴寇因之，则淮南非国家之有，谯、沛、汝、豫危而不安，此计之大失也。军宜速进据南顿，南顿有大邸阁，计足军人四十日粮。保坚城，因积谷，先人有夺人之心，此平贼之要也。”基屡请，乃听进据氵隐水。既至，复言曰：“兵闻拙速，未睹工迟之久。方今外有强寇，内有叛臣，若不时决，则事之深浅未可测也。议者多欲将军持重。将军持重是也，停军不进非也。持重非不行之谓也，进而不可犯耳。',
'今据坚城，保壁垒，以积实资虏，县运军粮，甚非计也。”景王欲须诸军集到，犹尚未许。基曰：“将在军，君令有所不受。彼得则利，我得亦利，是谓争城，南顿是也。”遂辄进据南顿，俭等从项亦争欲往，发十馀里，闻基先到，复还保项。时兖州刺史邓艾屯乐嘉，俭使文钦将兵袭艾。基知其势分，进兵偪项，俭众遂败。钦等已平，迁镇南将军，都督豫州诸军事，领豫州刺史，进封安乐乡侯。',
'上疏求分户二百，赐叔父子乔爵关内侯，以报叔父拊育之德。有诏特听。',
'诸葛诞反，基以本官行镇东将军，都督扬、豫诸军事。时大军在项，以贼兵精，诏基敛军坚垒。基累启求进讨。会吴遣朱异来救诞，军於安城。基又被诏引诸军转据北山，基谓诸将曰：“今围垒转固，兵马向集，但当精脩守备以待越逸，而更移兵守险，使得放纵，虽有智者不能善后矣。”遂守便宜上疏曰：“今与贼家对敌，当不动如山。若迁移依险，人心摇荡，於势大损。诸军并据深沟高垒，众心皆定，不可倾动，此御兵之要也。”书奏，报听。大将军司马文王进屯丘头，分部围守，各有所统。基督城东城南二十六军，文王敕军吏入镇南部界，一不得有所遣。城中食尽，昼夜攻垒，基辄拒击，破之。寿春既拔，文王与基书曰：“初议者云云，求移者甚众，时未临履，亦谓宜然。将军深算利害，独秉固志，上违诏命，下拒众议，终至制敌禽贼，虽古人所述，不是过也。”文王欲遣诸将轻兵深入，招迎唐咨等子弟，因衅有荡覆吴之势。基谏曰：“昔诸葛恪乘东关之胜，竭江表之兵，以围新城，城既不拔，而众死者太半。姜维因洮上之利，轻兵深入，粮饷不继，军覆上邽。夫大捷之后，上下轻敌，轻敌则虑难不深。今贼新败於外，又内患未弭，是其脩备设虑之时也。且兵出逾年，人有归志，今俘馘十万，罪人斯得，自历代征伐，未有全兵独克如今之盛者也。武皇帝克袁绍於官渡，自以所获已多，不复追奔，惧挫威也。”文王乃止。以淮南初定，转基为征东将军，都督扬州诸军事，进封东武侯。基上疏固让，归功参佐，由是长史司马等七人皆侯。',
'是岁，基母卒，诏秘其凶问，迎基父豹丧合葬洛阳，追赠豹北海太守。甘露四年，转为征南将军，都督荆州诸军事。常道乡公即尊位，增邑千户，并前五千七百户。前后封子二人亭侯、关内侯。',
'景元二年，襄阳太守表吴贼邓由等欲来归化，基被诏，当因此震荡江表。基疑其诈，驰驿陈状。且曰：“嘉平以来，累有内难，当今之务，在于镇安社稷，绥宁百姓，未宜动众以求外利。”文王报书曰：“凡处事者，多曲相从顺，鲜能确然共尽理实。诚感忠爱，每见规示，辄敬依来指。”后由等竟不降。',
'是岁基薨，追赠司空，谥曰景侯。子徽嗣，早卒。咸熙中，开建五等，以基著勋前朝，改封基孙廙，而以东武馀邑赐一子爵关内侯。晋室践阼，下诏曰：“故司空王基既著德立勋，又治身清素，不营产业，久在重任，家无私积，可谓身没行显，足用励俗者也。其以奴婢二人赐其家。”',
'评曰：徐邈清尚弘通，胡质素业贞粹，王昶开济识度，王基学行坚白，皆掌统方任，垂称著绩。可谓国之良臣，时之彦士矣。',
])

exports.内容 = 内容