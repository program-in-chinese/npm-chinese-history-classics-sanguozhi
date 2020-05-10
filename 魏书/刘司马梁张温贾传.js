const 内容 = Object.freeze([
'刘馥字元颖，沛国相人也。避乱扬州，建安初，说袁术将戚寄、秦翊，使率众与俱诣太祖。太祖悦之，司徒辟为掾。后孙策所置庐江太守李述攻杀扬州刺史严象，庐江梅乾、雷绪、陈兰等聚众数万在江、淮间，郡县残破。太祖方有袁绍之难，谓馥可任以东南之事，遂表为扬州刺史。',
'馥既受命，单马造合肥空城，建立州治，南怀绪等，皆安集之，贡献相继。',
'数年中恩化大行，百姓乐其政，流民越江山而归者以万数。於是聚诸生，立学校，广屯田，兴治芍陂及茄陂、七门、吴塘诸堨以溉稻田，官民有畜。又高为城垒，多积木石，编作草苫数千万枚，益贮鱼膏数千斛，为战守备。',
'建安十三年卒。孙权率十万众攻围合肥城百馀日，时天连雨，城欲崩，於是以苫蓑覆之，夜然脂照城外，视贼所作而为备，贼以破走。扬州士民益追思之，以为虽董安于之守晋阳，不能过也。及陂塘之利，至今为用。',
'馥子靖，黄初中从黄门侍郎迁庐江太守，诏曰：“卿父昔为彼州，今卿复据此郡，可谓克负荷者也。”转在河内，迁尚书，赐爵关内侯，出为河南尹。散骑常侍应璩书与靖曰：“入作纳言，出临京任。富民之术，日引月长。藩落高峻，绝穿窬之心。五种别出，远水火之灾。农器必具，无失时之阙。蚕麦有苫备之用，无雨湿之虞。封符指期，无流连之吏。鳏寡孤独，蒙廪振之实。加之以明擿幽微，重之以秉宪不挠；有司供承王命，百里垂拱仰办。虽昔赵、张、三王之治，未足以方也。”靖为政类如此。初虽如碎密，终於百姓便之，有馥遗风。母丧去官，后为大司农卫尉，进封广陆亭侯，邑三百户。上疏陈儒训之本曰：“夫学者，治乱之轨仪，圣人之大教也。自黄初以来，崇立太学二十馀年，而寡有成者，盖由博士选轻，诸生避役，高门子弟，耻非其伦，故无学者。虽有其名而无其人，虽设其教而无其功。宜高选博士，取行为人表，经任人师者，掌教国子。依遵古法，使二千石以上子孙，年从十五，皆入太学。明制黜陟荣辱之路；其经明行修者，则进之以崇德；荒教废业者，则退之以惩恶；举善而教不能则劝，浮华交游，不禁自息矣。阐弘大化，以绥未宾；六合承风，远人来格。此圣人之教，致治之本也。”后迁镇北将军，假节都督河北诸军事。靖以为“经常之大法，莫善於守防，使民夷有别”。遂开拓边守，屯据险要。又修广戾陵渠大堨，水溉灌蓟南北；三更种稻，边民利之。嘉平六年薨，追赠征北将军，进封建成乡侯，谥曰景侯。',
'子熙嗣。',
'司马朗字伯达，河内温人也。九岁，人有道其父字者，朗曰：“慢人亲者，不敬其亲者也。”客谢之。十二，试经为童子郎，监试者以其身体壮大，疑朗匿年，劾问。朗曰：“朗之内外，累世长大，朗虽稚弱，无仰高之风，损年以求早成，非志所为也。”监试者异之。后关东兵起，故冀州刺史李邵家居野王，近山险，欲徙居温。朗谓邵曰：“唇齿之喻，岂唯虞、虢，温与野王即是也；今去彼而居此，是为避朝亡之期耳。且君，国人之望也，今寇未至而先徙，带山之县必骇，是摇动民之心而开奸宄之原也，窃为郡内忧之。”邵不从。边山之民果乱，内徙，或为寇钞。',
'是时董卓迁天子都长安，卓因留洛阳。朗父防为治书御史，当徙西，以四方云扰，乃遣朗将家属还本县。或有告朗欲逃亡者，执以诣卓，卓谓朗曰：“卿与吾亡儿同岁，几大相负！”朗因曰：“明公以高世之德，遭阳九之会，清除群秽，广举贤士，此诚虚心垂虑，将兴至治也。威德以隆，功业以著，而兵难日起，州郡鼎沸，郊境之内，民不安业，捐弃居产，流亡藏窜，虽四关设禁，重加刑戮，犹不绝息，此朗之所以於邑也。愿明公监观往事，少加三思，即荣名并於日月，伊、周不足侔也。”卓曰：“吾亦悟之，卿言有意！”',
'朗知卓必亡，恐见留，即散财物以赂遗卓用事者，求归乡里。到谓父老曰；“董卓悖逆，为天下所仇，此忠臣义士奋发之时也。郡与京都境壤相接，洛东有成皋，北界大河，天下兴义兵者若未得进，其势必停於此。此乃四分五裂战争之地，难以自安，不如及道路尚通，举宗东到黎阳。黎阳有营兵，赵威孙乡里旧婚，为监营谒者，统兵马，足以为主。若后有变，徐复观望未晚也。”父老恋旧，莫有从者，惟同县赵咨，将家属俱与朗往焉。后数月，关东诸州郡起兵，众数十万，皆集荥阳及河内。诸将不能相一，纵兵钞掠，民人死者且半。久之，关东兵散，太祖与吕布相持於濮阳，朗乃将家还温。时岁大饥，人相食，朗收恤宗族，教训诸弟，不为衰世解业。',
'年二十二，太祖辟为司空掾属，除成皋令，以病去，复为堂阳长。其治务宽惠，不行鞭杖，而民不犯禁。先时，民有徙充都内者，后县调当作船，徙民恐其不办，乃相率私还助之，其见爱如此。迁元城令，入为丞相主簿。朗以为天下土崩之势，由秦灭五等之制，而郡国无蒐狩习战之备故也。今虽五等未可复行，可令州郡并置兵，外备四夷，内威不轨，於策为长。又以为宜复井田。往者以民各有累世之业，难中夺之，是以至今。今承大乱之后，民人分散，土业无主，皆为公田，宜及此时复之。议虽未施行，然州郡领兵，朗本意也。迁兖州刺史，政化大行，百姓称之。虽在军旅，常粗衣恶食，俭以率下。雅好人伦典籍，乡人李觌等盛得名誉，朗常显贬下之；后觌等败，时人服焉。锺繇、王粲著论云：“非圣人不能致太平。”朗以为“伊、颜之徒虽非圣人，使得数世相承，太平可致”。',
'建安二十二年，与夏侯惇、臧霸等征吴。到居巢，军士大疫，朗躬巡视，致医药。遇疾卒，时年四十七。遗命布衣幅巾，敛以时服，州人追思之。明帝即位，封朗子遗昌武亭侯，邑百户。朗弟孚又以子望继朗后。遗薨，望子洪嗣。',
'初朗所与俱徙赵咨，官至太常，为世好士。',
'梁习字子虞，陈郡柘人也，为郡纲纪。太祖为司空，辟召为漳长，累转乘氏、海西、下邳令，所在有治名。还为西曹令史，迁为属。并土新附，习以别部司马领并州刺史。时承高幹荒乱之馀，胡狄在界，张雄跋扈，吏民亡叛，入其部落；兵家拥众，作为寇害，更相扇动，往往棋跱。习到官，诱谕招纳，皆礼召其豪右，稍稍荐举，使诣幕府；豪右已尽，乃次发诸丁强以为义从；又因大军出征，分请以为勇力。吏兵已去之后，稍移其家，前后送邺，凡数万口；其不从命者，兴兵致讨，斩首千数，降附者万计。单于恭顺，名王稽颡，部曲服事供职，同於编户。边境肃清，百姓布野，勤劝农桑，令行禁止。贡达名士，咸显於世，语在常林传。太祖嘉之，赐爵关内侯，更拜为真。长老称咏，以为自所闻识，刺史未有及习者。建安十八年，州并属冀州，更拜议郎、西部都督从事，统属冀州，总故部曲。又使於上党取大材供邺宫室。习表置屯田都尉二人，领客六百夫，於道次耕种菽粟，以给人牛之费。后单于入侍，西北无虞，习之绩也。文帝践阼，复置并州，复为刺史，进封申门亭侯，邑百户；政治常为天下最。太和二年，徵拜大司农。习在州二十馀年，而居处贫穷，无方面珍物，明帝异之，礼赐甚厚。四年，薨，子施嗣。',
'初，济阴王思与习俱为西曹令史。思因直日白事，失太祖指。太祖大怒，教召主者，将加重辟。时思近出，习代往对，已被收执矣，思乃驰还，自陈己罪，罪应受死。太祖叹习之不言，思之识分，曰：“何意吾军中有二义士乎？”后同时擢为刺史，思领豫州。思亦能吏，然苛碎无大体，官至九卿，封列侯。',
'张既字德容，冯翊高陵人也。年十六，为郡小吏。后历右职，举孝廉，不行。太祖为司空，辟，未至，举茂才，除新丰令，治为三辅第一。袁尚拒太祖於黎阳，遣所置河东太守郭援、并州刺史高幹及匈奴单于取平阳，发使西与关中诸将合从。司隶校尉锺繇遣既说将军马腾等，既为言利害，腾等从之。',
'腾遣子超将兵万馀人，与繇会击幹、援，大破之，斩援首。幹及单于皆降。其后幹复举并州反。河内张晟众万馀人无所属，寇崤、渑间，河东卫固、弘农张琰各起兵以应之。太祖以既为议郎，参繇军事，使西徵诸将马腾等，皆引兵会击晟等，破之。斩琰、固首，幹奔荆州。封既武始亭侯。太祖将征荆州，而腾等分据关中。',
'太祖复遣既喻腾等，令释部曲求还。腾已许之而更犹豫，既恐为变，乃移诸县促储偫，二千石郊迎。腾不得已，发东。太祖表腾为卫尉，子超为将军，统其众。',
'后超反，既从太祖破超於华阴，西定关右。以既为京兆尹，招怀流民，兴复县邑，百姓怀之。魏国既建，为尚书，出为雍州刺史。太祖谓既曰：“还君本州，可谓衣绣昼行矣。”从征张鲁，别从散关入讨叛氐，收其麦以给军食。鲁降，既说太祖拔汉中民数万户以实长安及三辅。其后与曹洪破吴兰於下辩，又与夏侯渊讨宋建，别攻临洮、狄道，平之。是时，太祖徙民以充河北，陇西、天水、南安民相恐动，扰扰不安，既假三郡人为将吏者休课，使治屋宅，作水碓，民心遂安。太祖将拔汉中守，恐刘备北取武都氐以逼关中，问既。既曰：“可劝使北出就谷以避贼，前至者厚其宠赏，则先者知利，后必慕之。”太祖从其策，乃自到汉中引出诸军，令既之武都，徙氐五万馀落出居扶风、天水界。',
'是时，武威颜俊、张掖和鸾、酒泉黄华、西平麹演等并举郡反，自号将军，更相攻击。俊遣使送母及子诣太祖为质，求助。太祖问既，既曰：“俊等外假国威，内生傲悖，计定势足，后即反耳。今方事定蜀，且宜两存而斗之，犹卞庄子之刺虎，坐收其毙也。”太祖曰：“善。”岁馀，鸾遂杀俊，武威王祕又杀鸾。',
'是时不置凉州，自三辅拒西域，皆属雍州。文帝即王位，初置凉州，以安定太守邹岐为刺史。张掖张进执郡守举兵拒岐，黄华、麹演各逐故太守，举兵以应之。',
'既进兵为护羌校尉苏则声势，故则得以有功。既进爵都乡侯。凉州卢水胡伊健妓妾、治元多等反，河西大扰。帝忧之，曰：“非既莫能安凉州。”乃召邹岐，以既代之。诏曰：“昔贾复请击郾贼，光武笑曰：‘执金吾击郾，吾复何忧？’卿谋略过人，今则其时。以便宜从事，勿复先请。”遣护军夏侯儒、将军费曜等继其后。既至金城，欲渡河，诸将守以为“兵少道险，未可深入”。既曰：“道虽险，非井陉之隘，夷狄乌合，无左车之计，今武威危急，赴之宜速。”遂渡河。',
'贼七千馀骑逆拒军於鹯阴口，既扬声军由鹯阴，乃潜由且次出至武威。胡以为神，引还显美。既已据武威，曜乃至，儒等犹未达。既劳赐将士，欲进军击胡。诸将皆曰：“士卒疲倦，虏众气锐，难与争锋。”既曰：“今军无见粮，当因敌为资。',
'若虏见兵合，退依深山，追之则道险穷饿，兵还则出候寇钞。如此，兵不得解，所谓‘一日纵敌，患在数世’也。”遂前军显美。胡骑数千，因大风欲放火烧营，将士皆恐。既夜藏精卒三千人为伏，使参军成公英督千馀骑挑战，敕使阳退。胡果争奔之，因发伏截其后，首尾进击，大破之，斩首获生以万数。帝甚悦，诏曰：“卿逾河历险，以劳击逸，以寡胜众，功过南仲，勤逾吉甫。此勋非但破胡，乃永宁河右，使吾长无西顾之念矣。”徙封西乡侯，增邑二百，并前四百户。',
'酒泉苏衡反，与羌豪邻戴及丁令胡万馀骑攻边县。既与夏侯儒击破之，衡及邻戴等皆降。遂上疏请与儒治左城，筑鄣塞，置烽侯、邸阁以备胡。西羌恐，率众二万馀落降。其后西平麹光等杀其郡守，诸将欲击之，既曰：“唯光等造反，郡人未必悉同。若便以军临之，吏民羌胡必谓国家不别是非，更使皆相持著，此为虎傅翼也。光等欲以羌胡为援，今先使羌胡钞击，重其赏募，所虏获者皆以畀之。外沮其势，内离其交，必不战而定。”乃檄告谕诸羌，为光等所诖误者原之；能斩贼帅送首者当加封赏。',
'於是光部党斩送光首，其馀咸安堵如故。',
'既临二州十馀年，政惠著闻，其所礼辟扶风庞延、天水杨阜、安定胡遵、酒泉庞淯、敦煌张恭、周生烈等，终皆有名位。黄初四年薨。诏曰：“昔荀桓子立勋翟土，晋侯赏以千室之邑；冯异输力汉朝，光武封其二子。故凉州刺史张既，能容民畜众，使群羌归土，可谓国之良臣。不幸薨陨，朕甚愍之，其赐小子翁归爵关内侯。”明帝即位，追谥曰肃侯。子缉嗣。',
'缉以中书郎稍迁东莞太守。嘉平中，女为皇后，徵拜光禄大夫，位特进，封妻向为安城乡君。缉与中书令李丰同谋，诛。语在夏侯玄传。',
'温恢字曼基，太原祁人也。父恕，为涿郡太守，卒。恢年十五，送丧还归乡里，内足於财。恢曰：“世方乱，安以富为？”一朝尽散，振施宗族。州里高之，比之郇越。举孝廉，为廪丘长，鄢陵、广川令，彭城、鲁相，所在见称。入为丞相主簿，出为扬州刺史。太祖曰：“甚欲使卿在亲近，顾以为不如此州事大。故书云：‘股肱良哉！庶事康哉！’得无当得蒋济为治中邪？”时济见为丹杨太守，乃遣济还州。又语张辽、乐进等曰：“扬州刺史晓达军事，动静与共咨议。”',
'建安二十四年，孙权攻合肥，是时诸州皆屯戍。恢谓兖州刺史裴潜曰：“此间虽有贼，不足忧，而畏征南方有变。今水生而子孝县军，无有远备。关羽骁锐，乘利而进，必将为患。”於是有樊城之事。诏书召潜及豫州刺史吕贡等，潜等缓之。恢密语潜曰：“此必襄阳之急欲赴之也。所以不为急会者，不欲惊动远众。',
'一二日必有密书促卿进道，张辽等又将被召。辽等素知王意，后召前至，卿受其责矣！”潜受其言，置辎重，更为轻装速发，果被促令。辽等寻各见召，如恢所策。',
'文帝践阼，以恢为侍中，出为魏郡太守。数年，迁凉州刺史，持节领护羌校尉。道病卒，时年四十五。诏曰：“恢有柱石之质，服事先帝，功勤明著。及为朕执事，忠於王室，故授之以万里之任，任之以一方之事。如何不遂，吾甚愍之！”',
'赐恢子生爵关内侯。生早卒，爵绝。',
'恢卒后，汝南孟建为凉州刺史，有治名，官至征东将军。',
'贾逵字梁道，河东襄陵人也。自为儿童，戏弄常设部伍，祖父习异之，曰：“汝大必为将率。”口授兵法数万言。初为郡吏，守绛邑长。郭援之攻河东，所经城邑皆下，逵坚守，援攻之不拔，乃召单于并军急攻之。城将溃，绛父老与援要，不害逵。绛人既溃，援闻逵名，欲使为将，以兵劫之，逵不动。左右引逵使叩头，逵叱之曰：“安有国家长吏为贼叩头！”援怒，将斩之。绛吏民闻将杀逵，皆乘城呼曰：“负要杀我贤君，宁俱死耳！”左右义逵，多为请，遂得免。初，逵过皮氏，曰：“争地先据者胜。”及围急，知不免，乃使人间行送印绶归郡，且曰“急据皮氏”。',
'援既并绛众，将进兵。逵恐其先得皮氏，乃以他计疑援谋人祝奥，援由是留七日。',
'郡从逵言，故得无败。',
'后举茂才，除渑池令。高幹之反，张琰将举兵以应之。逵不知其谋，往见琰。',
'闻变起，欲还，恐见执，乃为琰画计，如与同谋者，琰信之。时县寄治蠡城，城堑不固，逵从琰求兵脩城。诸欲为乱者皆不隐其谋，故逵得尽诛之。遂脩城拒琰。',
'琰败，逵以丧祖父去官，司徒辟为掾，以议郎参司隶军事。太祖征马超，至弘农，曰“此西道之要”，以逵领弘农太守。召见计事，大悦之，谓左右曰：“使天下二千石悉如贾逵，吾何忧？”其后发兵，逵疑屯田都尉藏亡民。都尉自以不属郡，言语不顺。逵怒，收之，数以罪，挝折脚，坐免。然太祖心善逵，以为丞相主簿。',
'太祖征刘备，先遣逵至斜谷观形势。道逢水衡，载囚人数十车，逵以军事急，辄竟重者一人，皆放其馀。太祖善之，拜谏议大夫，与夏侯尚并掌军计。太祖崩洛阳，逵典丧事。时鄢陵侯彰行越骑将军，从长安来赴，问逵先生玺绶所在。',
'逵正色曰：“太子在邺，国有储副。先王玺绶，非君侯所宜问也。”遂奉梓宫还邺。',
'文帝即王位，以邺县户数万在都下，多不法，乃以逵为邺令。月馀，迁魏郡太守。大军出征，复为丞相主簿祭酒。逵尝坐人为罪，王曰：“叔向犹十世宥之，况逵功德亲在其身乎？”从至黎阳，津渡者乱行，逵斩之，乃整。至谯，以逵为豫州刺史。是时天下初复，州郡多不摄。逵曰：“州本以御史出监诸郡，以六条诏书察长吏二千石已下，故其状皆言严能鹰扬有督察之才，不言安静宽仁有恺悌之德也。今长吏慢法，盗贼公行，州知而不纠，天下复何取正乎？”兵曹从事受前刺史假，逵到官数月，乃还；考竟其二千石以下阿纵不如法者，皆举奏免之。帝曰：“逵真刺史矣。”',
'布告天下，当以豫州为法。赐爵关内侯。',
'州南与吴接，逵明斥候，缮甲兵，为守战之备，贼不敢犯。外修军旅，内治民事，遏鄢、汝，造新陂，又断山溜长谿水，造小弋阳陂，又通运渠二百馀里，所谓贾侯渠者也。黄初中，与诸将并征吴，破吕范於洞浦，进封阳里亭侯，加建威将军。明帝即位，增邑二百户，并前四百户。时孙权在东关，当豫州南，去江四百馀里。每出兵为寇，辄西从江夏，东从庐江。国家征伐，亦由淮、沔。是时州军在项，汝南、弋阳诸郡，守境而已。权无北方之虞，东西有急，并军相救，故常少败。逵以为宜开直道临江，若权自守，则二方无救；若二方无救，则东关可取。乃移屯潦口，陈攻取之计，帝善之。',
'吴将张婴、王崇率众降。太和二年，帝使逵督前将军满宠、东莞太守胡质等四军，从西阳直向东关，曹休从皖，司马宣王从江陵。逵至五将山，休更表贼有请降者，求深入应之。诏宣王驻军，逵东与休合进。逵度贼无东关之备，必并军於皖；休深入与贼战，必败。乃部署诸将，水陆并进，行二百里，得生贼，言休战败，权遣兵断夹石。诸将不知所出，或欲待后军。逵曰：“休兵败於外，路绝於内，进不能战，退不得还，安危之机，不及终日。贼以军无后继，故至此；今疾进，出其不意，此所谓先人以夺其心也，贼见吾兵必走。若待后军，贼已断险，兵虽多何益！”乃兼道进军，多设旗鼓为疑兵，贼见逵军，遂退。逵据夹石，以兵粮给休，休军乃振。初，逵与休不善。黄初中，文帝欲假逵节，休曰：“逵性刚，素侮易诸将，不可为督。”帝乃止。及夹石之败，微逵，休军几无救也。',
'会病笃，谓左右曰：“受国厚恩，恨不斩孙权以下见先帝。丧事一不得有所脩作。”薨，谥曰肃侯。子充嗣。豫州吏民追思之，为刻石立祠。青龙中，帝东征，乘辇入逵祠，诏曰：“昨过项，见贾逵碑像，念之怆然。古人有言，患名之不立，不患年之不长。逵存有忠勋，没而见思，可谓死而不朽者矣。其布告天下，以劝将来。”充，咸熙中为中护军。',
'评曰：自汉季以来，刺史总统诸郡，赋政于外，非若曩时司察之而已。太祖创基，迄终魏业，此皆其流称誉有名实者也。咸精达事机，威恩兼著，故能肃齐万里，见述于后也。',
])

exports.内容 = 内容