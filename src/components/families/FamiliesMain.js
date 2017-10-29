import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class FamiliesMain extends Component {
  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col-sm-6">
            <Toolbar>
              <ToolbarGroup>
                <ToolbarTitle text="The Spence Family" />
              </ToolbarGroup>
            </Toolbar>
            <Card>
              <List>
                <ListItem>
                  <CardHeader>David Spence</CardHeader>
                  <CardText>
                    Born 28 Apr 1789 in Earlston, Berwickshire, Scotland.
                    Husband of Helen (Brodie) Spence — married 24 Sep 1815 in
                    Whitekirk, East Lothian, Scotland. Died 29 May 1846 in
                    Adelaide, South Australia, Australia.
                  </CardText>
                  <CardActions>
                    <FlatButton label="Trove">
                      <a
                        href="https://www.wikitree.com/wiki/Spence-2461#Biography"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        David Spence - WikiTree
                      </a>
                    </FlatButton>
                  </CardActions>
                </ListItem>
                <ListItem>
                  Helen Spence formerly Brodie. Together with her husband David
                  she had eight children - Agnes Spence, Janet (Spence) Murray,
                  William Richard Spence, John Brodie Spence, Catherine Helen
                  Spence, David Wauchope Spence, Mary Brodie (Spence) Wren and
                  Eliza Spence.
                  <CardHeader>Obituary Notices.</CardHeader>
                  <CardText>
                    DEATH OF AN AGED PIONEER COLONIST. We have received
                    information of the death of Mrs. Helen Brodie Spence, at
                    College Town, on December 8, at the good old age of 96. The
                    deceased lady had been identified with South Australia as
                    one of that band of brave women who came out with their
                    husbands in the early days of settlement in this colony, and
                    bore the trials and vicissitudes of a colonist's life with
                    the enduring courage which has so marked the lives of our
                    women pioneers and rendered them fitting helpmates for those
                    to whom this province owes its development. Mrs. Spence was
                    the widow of the late Mr. David Spence, sen., who was the
                    first Town Clerk of Adelaide, and she came out to South
                    Australia with him in 1839. One of her daughters is Miss C.
                    H. Spence, so well known through her literary labours and
                    the prominent part she takes in charitable organisations ;
                    while Mr. J. B. Spence, formerly Commissioner of Public
                    Works and Chief Secretary, is a son of deceased. There are
                    two other sons and a married daughter in one of the other
                    colonics.
                  </CardText>
                  <CardActions>
                    <FlatButton label="Trove">
                      <a
                        href="http://trove.nla.gov.au/newspaper/article/199853680?browse=ndp%3Abrowse%2Ftitle%2FE%2Ftitle%2F966%2F1887%2F12%2F09%2Fpage%2F22410755%2Farticle%2F199853680"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Evening Journal (Adelaide, SA : 1869 - 1912) Fri 9 Dec
                        1887 Page 2 Obituary Notices
                      </a>
                    </FlatButton>
                  </CardActions>
                </ListItem>

                <ListItem>
                  <CardHeader>Agnes Spence</CardHeader>
                  <CardText>
                    Agnes was born in 1818. She was the daughter of David Spence
                    and Helen Brodie. She passed away about 1835. Died of
                    consumption at the age of 16
                  </CardText>
                </ListItem>

                <ListItem>
                  <CardHeader>Janet Murray (Spence)</CardHeader>
                  <CardText>
                    The name Jessie is a Scottish pet name for Janet Jessie
                    (1821-1888) married Andrew Murray (1813-1880) in 1841. They
                    had ten children, not all of whom survived. From 1877 the
                    family lived at Yarragon, Gippsland, Victoria where sister
                    Catherine Helen Spence often visited. Children are Catherine
                    Helen Murray, known as Nina (1852-1933), and Margaret Brodie
                    Murray, known as Madge (1858-1935), who worked as a
                    postmistress. John David Murray (1850-1922) and George
                    Houston Murray (1854-1938). Janet died on the 21st November,
                    1888 at her residence, Gippsland, in consequence of an
                    accident.
                  </CardText>
                </ListItem>

                <ListItem>
                  <CardHeader>William Richard Spence</CardHeader>
                  <CardText>
                    William Richard was born in 1822. William Richard is the
                    child of David Spence and Helen Brodie. From the
                    Autobiography of Catherine Helen Spence - "My eldest brother
                    William, was not successful in the country, and went to
                    Western Australia for some years, and later to New Zealand,
                    where he died in his eightieth year".
                  </CardText>
                </ListItem>
                <ListItem>
                  <CardHeader>John Brodie Spence</CardHeader>
                  <CardText>
                    John Brodie was born in 1824. He was the son of David Spence
                    and Helen Brodie. He passed away in 1902. John Brodie Spence
                    (15 May 1824 – 7 December 1902), born in Melrose, Scotland,
                    was a prominent banker and politician in the early days of
                    South Australia. He was a brother of the reformer Catherine
                    Helen Spence. He arrived in South Australia on 31 October
                    1839 on the Palmyra with his mother Helen Brodie Spence
                    (1791–1887). Other children of David and Helen on the
                    passenger list were his sisters Catherine, Jessie, Helen and
                    Mary and brother William. His father David Spence
                    (1790–1846), solicitor and first Town Clerk of Adelaide
                    arrived earlier (13 October 1839) on the Dumfries. The
                    family was struggling to make ends meet, so after some seven
                    months he and his brother went farming, without much
                    success, and he moved to Adelaide in 1845, joining either
                    the Bank of Adelaide or the Bank of South Australia, where
                    he remained for seven years. He was afterwards for five
                    years official assignee and curator of intestate estates,
                    then in 1856 accountant in the Railway Department, and from
                    1859 to 1864 Official Assignee and Curator of Intestate
                    Estates. but left that office for the management of the
                    English and Scottish Bank (soon to become English, Scottish
                    and Australian Chartered Bank) which he held till 1878.
                    Between around 1879 and 1881 he was involved with Arthur
                    Harvey in land development at The Grange and East Adelaide.
                    He was elected a member of the Legislative Council in 1881,
                    second on the poll with Henry Ayers, W. C. Buik, James
                    Rankine, John Pickering, and R. A. Tarlton. He was Chief
                    Secretary in the Downer Government from June to October
                    1885, when he retired to take the position of Commissioner
                    of Public Works. In June 1886 he again took office as Chief
                    Secretary, retiring the following month. On 5 February 1896,
                    he was appointed one of the first five trustees of the State
                    Bank, and was Chairman of the board at the time of his
                    death.
                  </CardText>
                  <CardActions>
                    <FlatButton label="Wiki Tree">
                      <a
                        href="https://www.wikitree.com/wiki/Spence-2462"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        John Brodie Spence
                      </a>
                    </FlatButton>
                  </CardActions>
                </ListItem>

                <ListItem>
                  <CardHeader>Catherine Helen Spence</CardHeader>
                  <CardText>
                    Catherine Helen Spence (1825-1910), writer, preacher,
                    reformer and feminist, was born on 31 October 1825 near
                    Melrose, Scotland, daughter of David Spence, lawyer and
                    banker, and his wife Helen, née Brodie. In 1839 David's
                    wheat speculations failed and Catherine could not further
                    her education in Edinburgh. The family migrated to South
                    Australia in the Palmyra, arriving in November. David was
                    clerk to the first Adelaide Municipal Council in 1840-43. In
                    Adelaide Spence became a governess and set out to fulfil her
                    childhood ambition to be 'a teacher first and a great writer
                    afterwards'. The first novel about Australia written by a
                    woman, Clara Morison: A Tale of South Australia During the
                    Gold Fever, was published in London (1854) in 2 volumes,
                    followed by Tender and True: A Colonial Tale in 2 volumes
                    (1856); both were anonymous. Mr. Hogarth's Will, 3 volumes
                    (1865) was the first to bear her name as author, then came
                    The Author's Daughter (1868) also in 3 volumes. 'Gathered
                    In' was serialized in the Adelaide Observer in 1881-82, and
                    'Handfasted', submitted for a prize offered by the Sydney
                    Mail in about 1880, was rejected as 'calculated to loosen
                    the marriage tie … too socialistic and therefore dangerous',
                    and remains in manuscript. Though never popular, these works
                    won respect; but she stopped writing novels because her
                    ambition changed as she grew older. An Agnostic's Progress
                    from the Known to the Unknown (1884) and A Week in the
                    Future (1889) were her last major fiction. In her
                    Autobiography (1910) she wrote, discerningly, 'my work on
                    newspapers and reviews is more characteristic of me, and
                    intrinsically better work than I have done in fiction'. By
                    1878 she had overcome her diffidence and won repute as a
                    literary critic and social commentator, with articles in
                    South Australian newspapers as well as in the Cornhill
                    Magazine, Fortnightly Review and Melbourne Review. In
                    becoming a regular, paid contributor of the South Australian
                    Register she was able to express her keen interest in the
                    colony and its future, and she obtained a ready forum for
                    her chosen causes. In 1872 Spence helped Caroline Emily
                    Clark to found the Boarding-Out Society, to board orphaned,
                    destitute and reformed delinquent children in the homes of
                    families, and visit them to check on their behaviour and
                    treatment. She was an official of the society in 1872-86 and
                    worked strenuously as a visitor. When the State Children's
                    Council was established in 1886 she became a member, and was
                    later a member of the Destitute Board. Most of her work for
                    education was done with her pen. Spence supported the
                    foundation of kindergartens and a government secondary
                    school for girls. In 1877 she was appointed to the School
                    Board for East Torrens, an ineffectual and short-lived body.
                    Her book, The Laws We Live Under (1880), was the first
                    social studies textbook used in Australian schools, and
                    anticipated similar courses in the other colonies by twenty
                    years. Spence had become an enthusiast for electoral reform
                    in 1859 when she read J. S. Mill's review of Thomas Hare's
                    system of proportional representation. In 1861 she wrote,
                    printed (at her brother's expense) and distributed A Plea
                    for Pure Democracy. Mr. Hare's Reform Bill Applied to South
                    Australia, but she commented, 'it did not set the Torrens on
                    fire'. Though she later claimed that the system had been her
                    life's major cause, she ignored it between 1861 and 1892,
                    except to inject a discussion of it into Mr. Hogarth's Will
                    and visit Hare when she was holidaying in Britain in
                    1864-65. She had initially presented Hare's scheme as a
                    means of ensuring representation of minorities by men of
                    virtue, learning and intelligence, which was seen as
                    conservative support of privilege. In 1892 she propounded
                    the modified Hare-Spence system as the only way of attaining
                    truly proportionate representation of political parties, an
                    argument well suited to the current political climate of the
                    colony. By then Spence had acquired greater confidence and
                    become an accomplished public speaker, a process that had
                    begun when she read papers to the South Australian
                    Institute, being the first woman to do so, and brought her
                    acclaim when she addressed the Australasian conferences on
                    charity in 1891 and 1892. About 1856, after much doubt and
                    distress over the doctrines of the Church of Scotland in
                    which she had been raised, she joined the Unitarian
                    Christian Church. In 1878 she substituted for the minister
                    by reading a published sermon, and the same year seized an
                    opportunity to deliver one of her own. Later she frequently
                    preached in Adelaide, and occasionally in Melbourne and
                    Sydney. R. Barr Smith gave financial backing for her
                    campaign for proportional representation; it was supported
                    by the nascent Labor Party and several small populist and
                    socialist groups, and was launched with widespread public
                    meetings in 1892-93. In 1893 Spence went to the Chicago
                    World Fair to address the International Conference on
                    Charities and Correction, the Proportional Representation
                    Congress, the Single Tax Conference, the Peace Conference,
                    and a gathering in the Women's Building. She then lectured
                    and preached across the United States, visited Britain and
                    Switzerland and returned to South Australia in 1894. Next
                    year she formed the Effective Voting League of South
                    Australia. She ran for the Federal Convention in 1897,
                    becoming Australia's first female political candidate, and
                    came twenty-second out of thirty-three candidates. In 1899
                    and 1900 she campaigned unsuccessfully for the introduction
                    of 'effective voting' in Federal elections, and in 1902-10
                    her supporters introduced proportional representation bills
                    into the South Australian parliament. The heterogeneous
                    executive of her Effective Voting League exemplified her
                    non-party and probably personal following. Spence was 67
                    when she began her campaign, white-haired, short, stout,
                    energetic, with a 'carrying' but not strident Scot's burr,
                    and a direct, natural, sometimes brusque manner. She aroused
                    much enthusiasm, especially for herself as a woman
                    transcending social restrictions on permissible activities.
                    Spence joined the fight for female suffrage in 1891 and
                    became a vice-president of the Women's Suffrage League of
                    South Australia. After South Australian women were
                    enfranchised in 1894, she supported campaigns in New South
                    Wales and Victoria and spoke at meetings of the Women's
                    League, a body formed in Adelaide for the political
                    education of women. She urged the establishment of a local
                    organization affiliated with the International Council of
                    Women. This work also won her acclaim; she had become a
                    symbol of what Australian women could attempt. When she died
                    on 3 April 1910 she was mourned as 'The Grand Old Woman of
                    Australia'. She had lived with her parents (her father died
                    in 1843, her mother in 1886) and had raised three families
                    of orphaned children in succession. Her estate was sworn at
                    £215. Her portrait hangs in the South Australian Art
                    Gallery.
                  </CardText>
                  <CardActions>
                    <FlatButton label="Project Gutenberg">
                      <a
                        href="http://www.gutenberg.org/files/4220/4220-h/4220-h.htm"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Autobiography of Catherine Helen Spence
                      </a>
                    </FlatButton>
                  </CardActions>
                  <CardActions>
                    <FlatButton label="By Susan Eade">
                      <a
                        href="http://www.gutenberg.org/files/4220/4220-h/4220-h.htm"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Spence, Catherine Helen (1825–1910)
                      </a>
                    </FlatButton>
                  </CardActions>
                </ListItem>

                <ListItem>
                  <CardHeader>David Wauchope Spence</CardHeader>
                  <CardText>
                    David Wauchope was born in 1828. He is the son of David
                    Spence and Helen Brodie. 1839 - David Wauchope, had been
                    left behind for his education with the three maiden aunts,
                    but he came out about the end of that year, and began life
                    in the office of the Burra Mine at a small salary. He did
                    not marry during his lifetime and died in 1890 at Ballarat,
                    Victoria.
                  </CardText>
                </ListItem>
                <ListItem>
                  <CardHeader>Mary Brodie (Spence) Wren</CardHeader>
                  <CardText>
                    Mary Brodie was born in 1830. She is the daughter of David
                    Spence and Helen Brodie. Marriage Notice - At
                    Pulteney-street, Adelaide, on the 19th instant, by the Rev.
                    Robert Haining, Mr. William John Wren to Mary Brodie,
                    youngest daughter of the late David Spence, Esq., solicitor,
                    Adelaide. Together they had three children:
                    <ListItem>1856 WREN Charles William</ListItem>
                    <ListItem>
                      1858 WREN Margaret Brodie 1862 WREN Eleanor Brodie
                    </ListItem>
                    <ListItem>1862 WREN Eleanor Brodie</ListItem>
                  </CardText>
                  <CardActions>
                    <FlatButton label="Trove">
                      <a
                        href="http://trove.nla.gov.au/newspaper/article/49299582?searchTerm=spence%20-%20wren&searchLimits=dateFrom=1855-01-01|||dateTo=1855-12-31"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Marriage Notice
                      </a>
                    </FlatButton>
                  </CardActions>
                </ListItem>
                <ListItem>
                  <CardHeader>Eliza Spence</CardHeader>
                  <CardText>
                    Eliza was born in 1833. She was the daughter of David Spence
                    and Helen Brodie. She passed away in 1836 age 3.
                  </CardText>
                </ListItem>
              </List>
            </Card>
            <hr />
          </div>

          <div className="col-sm-6">
            <Toolbar>
              <ToolbarGroup>
                <ToolbarTitle
                  text="The Paterson Family"
                  subtitle="Andrew Barton Paterson"
                />
              </ToolbarGroup>
            </Toolbar>
            <Card>
              <List>
                <ListItem>
                  <CardHeader>Andrew Barton Paterson</CardHeader>
                  <CardText>
                    Andrew Barton "Banjo" Paterson. Australian bush poet,
                    solicitor, journalist, war correspondent and soldier, was
                    born on 17 February 1864 at Narrambla near Orange, New South
                    Wales, eldest of seven children of Andrew Bogle Paterson
                    (d.1889), grazier, and his native-born wife Rose Isabella,
                    daughter of Robert Barton of Boree Nyrang station, near
                    Orange. On 8 April 1903 he married Alice Emily Walker, of
                    Tenterfield Station, in St Stephen's Presbyterian Church, in
                    Tenterfield, New South Wales.[13] Their first home was in
                    Queen Street, Woollahra. The Patersons had two children,
                    Grace (born in 1904) and Hugh (born in 1906).
                  </CardText>
                </ListItem>

                <ListItem>
                  <CardHeader>Rose Florence Lumsdaine</CardHeader>
                  <CardText>
                    Rose Florence Lumsdaine (Paterson) born October 1865 and
                    died May 1931. Daughter of Andrew Bogle Paterson and Rose
                    Isabella Paterson. Sister of Andrew Barton (Banjo) Paterson.
                    Married Reverend Edwin Sandys Lumsdaine and mother to Beryl
                    Doris Kennedy; Ruth Lumsdaine; Edwin Lumsdaine and Rosamund
                    Lumsdaine.
                  </CardText>
                </ListItem>

                <ListItem>
                  <CardHeader>Andrew Bogle Paterson</CardHeader>
                  <CardText>
                    Andrew Bogle Paterson (b.1833, d.1889), grazier, married to
                    Rose Isabella, daughter of Robert Barton of Boree Nyrang
                    station, near Orange. Father to Andrew Barton 'Banjo'
                    Paterson and Rose Florence Lumsdaine, a lowland Scot, he
                    migrated to New South Wales about 1850, eventually taking up
                    Buckinbah station at Obley in the Orange district.
                  </CardText>
                </ListItem>

                <ListItem>
                  <CardHeader>Isabella Paterson (Barton).</CardHeader>
                  <CardText>
                    Isabella Paterson daughter to Robert Johnston Barton and
                    Emily Mason Barton. Sister to Charles Hampden H Barton.
                    Married to Andrew Bogle Paterson with seven children. Mother
                    of Andrew Barton Paterson, Rose Florence Paterson, Emily
                    Jessie Paterson, Mary Edith (Paterson) Huntley, Hamilton
                    Howison Paterson, Grace Paterson and Gwendolen Alexa
                    Paterson. It appears only Andrew and Rose reached adulthood.
                  </CardText>
                </ListItem>

                <ListItem>
                  <CardHeader>Alice Emily Paterson (Walker)</CardHeader>
                  <CardText>
                    Alice Emily Paterson, wife to Andrew Barton 'Banjo'
                    Paterson. Born 1877 in Tenterfield, NSW, Australia, died in
                    June 1963 (86). Mother to Hugh and Grace Paterson. It
                    appears Grace Paterson died in childhood.
                  </CardText>
                </ListItem>
                <ListItem>
                  <CardHeader>Hugh Barton Paterson</CardHeader>
                  <CardText>
                    Hugh Barton Paterson is the son of Andrew Barton 'Banjo'
                    Patersons and Emily Walker. Born 1906 in Woollahra, New
                    South Wales, Australia. Hugh served in the 20th Brigade
                    A.I.F as a Private and is listed as a driver. He was a Rat
                    of Tobruk and served in the Middle East until 1942, then
                    transfered to the AA Amenities unit and discharched after
                    WW2 as a Lieutenant. He married Rhona Maria Gledstanes
                    White.
                  </CardText>
                </ListItem>
                <ListItem>
                  <CardHeader>Alice Emily Paterson (Walker)</CardHeader>
                  <CardText>Wife .</CardText>
                </ListItem>
              </List>
            </Card>
            <hr />
          </div>

          <div className="col-sm-6">
            <Toolbar>
              <ToolbarGroup>
                <ToolbarTitle text="The Bryant Family" />
              </ToolbarGroup>
            </Toolbar>
            <Card>
              <List>
                <ListItem>
                  <CardHeader>Matthew Bryant</CardHeader>

                  <CardText>
                    Matthew and Mary Mills were married in Bridgewater in 1784
                    and the older four of their ten children were born there.
                    Matthew died in 1815 and Many about 1829? Matthew Bryant and
                    Mary Mills who were tenants of Curry Pool, a farm of some
                    390 acres in Charlinch and Spaxton parishes in Somerset from
                    1791. On their death George held the lease of Curry Pool
                    Farm.
                  </CardText>
                </ListItem>
                <ListItem>
                  <CardHeader>George Bryant</CardHeader>
                  <CardText>
                    George was born in 1789. George still the lease of Curry
                    Pool the property until it was sold in October 1833 and he
                    was 44. George and his family sailed to join his brothers in
                    Van Diemen’s Land aboard the Sarah, a ship of 488 tons. She
                    sailed from London on 14 October 1834 and arrived in Hobart
                    on 14 February 1835. George Bryant had married Ann Legg in
                    Bristol in 1811 and they had ten children between 1812 and
                    1833. It would appear that George and his family lived with
                    his brother Francis at ‘Redlands’, Plenty, for some years
                    after arrival in Van Diemen’s Land, probably until Francis
                    left ‘Redlands’ on expiration of the lease at the end of
                    1841. George died in Hobart on 8 November 1853. His wife Ann
                    Legg seems to have gone to live with her son James in
                    Victoria soon after. She died on 7 December 1867 aged 77, at
                    his property, Frogmoor Farm, Yarram Creek.
                  </CardText>
                </ListItem>

                <ListItem>
                  <CardHeader>Francis Bryant</CardHeader>
                  <CardText>
                    Francis Bryant was born in 1795. Francis had married Jane
                    Carver about 1815. They sailed to Van Diemen's Land with
                    their five children and had a further six children in
                    Tasmania. On 20 August 1845, Francis offered 2,186 acres at
                    Jerusalem for lease. It is not clear when Francis and his
                    family left Tasmania for Victoria but it may well have been
                    about this time. By daughter Eliza’s account, they certainly
                    were living in Melbourne, in 1850/51. The Victorian
                    Electoral Rolls for 1856/57 show Francis Bryant, Gentleman,
                    at 27 La Trobe Street, Melbourne. His wife, Jane Carver,
                    died on 15 March 1857 at Victoria Street, Melbourne, aged
                    65. Francis Bryant of Spaxton Cottage, South Yarra,
                    Melbourne, born Charlinch, Som- erset, late of Surrey,
                    gentleman aged 63, married Lucy Matilda (neé Marzetti), aged
                    38, widow of George John Marzetti on 9 March 1859 at Christ
                    Church, South Yarra. A Marzetti family was prominent in the
                    New Norfolk area in Tasmania. Francis Bryant died in London,
                    England, on 29 January 1863.
                  </CardText>
                </ListItem>

                <ListItem>
                  <CardHeader>James Bryant</CardHeader>
                  <CardText>
                    James Bryant was born in 1799. Of the brothers, James and
                    Edmund, both bachelors, went first. They wrote jointly, from
                    Guild Hall Coffee Shop, London, to Earl Bathurst on 25 April
                    1823, soliciting a land grant in Tasmania. Their letter of
                    recommendation to Lieutenant Governor Sorell was dated 30
                    April 1823. They sailed in the ship Aguilar, 432 tons, and
                    arrived in Hobart on 4 February 1824. After arrival in
                    Hobart with about £1,000 capital each, James and Edmund
                    Bryant took up land near Jericho. This is about seventy
                    kilometres by road north of Hobart. Even forty years later
                    it was fairly wild country. James was granted 800 acres and
                    Edmund 700. Afterwards they were to receive further grants
                    of 700 and 800 acres on account of additional stock
                    imported. Lengthy sea voyages or a lonely life in the bush
                    are good for romance. In October 1824 in Hobart, James
                    Bryant married Ann Roe, the widow of Thomas Roe, another
                    passenger on the Aguilar who had died on the voyage.
                  </CardText>
                </ListItem>

                <ListItem>
                  <CardHeader>Edmund Bryant</CardHeader>
                  <CardText>
                    Edmund Bryant was born in 1803. Edmund had departed again
                    for England in the brig Woodlark, 196 tons, on 4 April 1824.
                    There he married Jane Mogg by licence on 15 February 1825 at
                    St Mary’s Church, Bridgwater. They were to have seven
                    children. Edmund arrived back in Hobart in the brig
                    Mountaineer on 24 October 1825, with his bride, and Francis
                    Bryant, with his wife and five children. They brought
                    pure-bred sheep and cattle and a two- year-old thoroughbred
                    stallion as well as goods for sale. The brothers did much
                    jointly and had a store in Hobart which was also a butchery
                    at one stage. They imported pure-bred sheep and cattle and
                    ran stock on their various properties. It seems James and
                    Edmund ran their properties at Jericho jointly. However,
                    before James died on 27 January 1833, Edmund had leased
                    ‘Trafalgar’ at Evandale and was in occupation by October
                    1831. He was to run other properties later. As Edmund Bryant
                    imported the first thoroughbred stallion, Viscount, it seems
                    likely that the brothers were much involved in racing. In
                    spite of Governor Arthur’s dis- approval, there had been a
                    day of horse racing on the Fourteen Tree Plain, Jericho as
                    far back as 3rd April, 1826. The day following these races a
                    meeting was held at Jericho at which it was unanimously
                    decided to form a Turf Club with a limit of fifty members.
                    This was the foundation of the Tasmanian Turf Club and was
                    the first club in V.D.L. to use the word “Tasmanian”.
                  </CardText>
                </ListItem>
              </List>
            </Card>
            <hr />
          </div>

          <div className="col-sm-6">
            <Toolbar>
              <ToolbarGroup>
                <ToolbarTitle text="The Gray Family" subtitle="Montecollum" />
              </ToolbarGroup>
            </Toolbar>
            <Card>
              <List>
                <ListItem>
                  <CardHeader>John Thomas Gray</CardHeader>
                  <CardText>
                    Married to Annie with six sons and three daughters. John
                    Gray came from the South Coast and after a short sojourn at
                    Burringbar selected land Montecollum in 1906. By 1922 the a
                    creditable development of the land was witnessed. The
                    property was subdivided from virgin scrub into three fams.
                    The farms were worked along with a like number of sons. On
                    retirement the property was handed over to the two youngest
                    sons, Lewis and Ernest.
                  </CardText>
                </ListItem>

                <ListItem>
                  <CardHeader>Annie Gray</CardHeader>
                  <CardText>
                    Annie and her husband John both originated from Foxground on
                    the South coast. Annie Gray was highly respected by a large
                    circle of friends.
                  </CardText>
                </ListItem>

                <ListItem>
                  <CardHeader>Daniel Gray</CardHeader>
                  <CardText>Daniel Gray was based in Milla Milla.</CardText>
                </ListItem>

                <ListItem>
                  <CardHeader>Joseph Gray</CardHeader>
                  <CardText>Joseph Gray was based in Burringbar.</CardText>
                </ListItem>
                <ListItem>
                  <CardHeader>Jack Gray</CardHeader>
                  <CardText>Jack Gray was based in Mullumbimby.</CardText>
                </ListItem>
                <ListItem>
                  <CardHeader>Samuel Gray</CardHeader>
                  <CardText>Samuel Gray was based in Montecollum.</CardText>
                </ListItem>
                <ListItem>
                  <CardHeader>Lewis Gray</CardHeader>
                  <CardText>Lewis Gray was based in Montecollum.</CardText>
                </ListItem>
                <ListItem>
                  <CardHeader>Ernest Gray</CardHeader>
                  <CardText>Ernest Gray was based in Montecollum.</CardText>
                </ListItem>
                <ListItem>
                  <CardHeader>Mrs H.R. Bower</CardHeader>
                  <CardText>
                    Daughter to John and Annie. Based in Mullumbimby.
                  </CardText>
                </ListItem>
                <ListItem>
                  <CardHeader>Mrs C. Lindsay</CardHeader>
                  <CardText>
                    Daughter to John and Annie. Based in Mullumbimby.
                  </CardText>
                </ListItem>
                <ListItem>
                  <CardHeader>Mrs. C. Bryen</CardHeader>
                  <CardText>
                    Daughter to John and Annie. Based in Sydney.
                  </CardText>
                </ListItem>
              </List>
            </Card>
            <hr />
          </div>

          <div className="col-sm-6">
            <Toolbar>
              <ToolbarGroup>
                <ToolbarTitle
                  text="The Hollingworth and King Families"
                  subtitle="A Timber History"
                />
              </ToolbarGroup>
            </Toolbar>
            <Card>
              <List>
                <ListItem>
                  <CardHeader>Thomas Nicholsan Hollingworth</CardHeader>
                  <CardText>
                    THOMAS Nicholson Hollingworth, the founder of the
                    Hollingworth family in our area, was a convict sentenced in
                    1836 to life imprisonment for stealing a gun and a coat.
                    When he arrived in New South Wales he was assigned to the
                    Busby Brothers as a labourer and came with them to the
                    Richmond River about 1844. He obtained his Ticket of Leave
                    soon afterwards in 1845 and remained in the area when the
                    Busby Brothers left. He received his conditional pardon in
                    1853. In 1847 he married Ann King at Grafton. Thomas and Ann
                    Hollingworth moved to Lismore possibly to be closer to her
                    family. Thomas obtained a 92-acre conditional purchase
                    property just west of the Richmond River and on the southern
                    side of a creek leading into the Richmond. This property is
                    now part of South Lismore and the creek is called
                    Hollingworth Creek, after Thomas. The Bruxner Highway
                    crosses Hollingworth Creek and for many years the bridge was
                    labelled "Hollingsworth Creek" (with an "s"), much to the
                    disgust of family members. A campaign, led by descendant
                    Nicholson (Nick) Hollingworth, had the "s" removed in recent
                    years. Thomas and Ann's second son, Joseph Nicholson
                    Hollingworth, initially worked for his uncle, Thomas King,
                    at Woodburn.
                  </CardText>
                </ListItem>

                <ListItem>
                  <CardHeader>Ann Hollingworth (King)</CardHeader>
                  <CardText>
                    Ann was a daughter of William Parrott King and his wife
                    Hannah (nee Barrett) who had arrived as immigrants.
                  </CardText>
                </ListItem>

                <ListItem>
                  <CardHeader>William Parrot King</CardHeader>
                  <CardText>
                    William King had obtained work first as a shepherd and then
                    as a bullock driver. For some years he hauled cedar logs to
                    the river at Tucki where they were loaded onto sailing ships
                    or rafted downstream. Later he worked for William Yabsley at
                    Coraki as a sawyer.
                  </CardText>
                </ListItem>

                <ListItem>
                  <CardHeader>Thomas King.</CardHeader>
                  <CardText>
                    Thomas King was the brother to William and therefore the
                    uncle to their children. Thomas King had been apprenticed as
                    a shipwright to William Yabsley. Yabsley had provided a
                    tutor to educate his apprentices as well as giving them a
                    sound knowledge of their craft. Much of this knowledge was
                    passed on by Thomas King to Joseph Hollingworth who some
                    time later took up an apprenticeship with sawmill owner,
                    J.E. Glasgow, at Lismore. He eventually became a millwright
                    and master sawmiller with a vast knowledge of local timbers
                    from throughout the whole region.
                  </CardText>
                </ListItem>

                <ListItem>
                  <CardHeader>Joseph Nicholsan Hollingworth</CardHeader>
                  <CardText>
                    Joseph married Annie McAndrew Ross in 1892 and in 1902 he
                    purchased Glasgow's sawmill at Mullumbimby. He moved his
                    growing family there and began what was to become a major
                    role in the timber industry of the North Coast. He obtained
                    timber licences for large areas of forest land and later
                    other mills were built so that the timber could be processed
                    closer to its source. For a time he was in partnership with
                    a cousin, Robert Raymond Mallett, who had worked in the
                    timber industry for many years and had a fine knowledge of
                    marketing as well as species of timber. Joseph and Annie had
                    only one son, David John Hollingworth, and he was to follow
                    his father into the business. Unfortunately, Joseph
                    contracted influenza in 1919 during the epidemic and died.
                  </CardText>
                </ListItem>
                <ListItem>
                  <CardHeader>David John Hollingworth</CardHeader>
                  <CardText>
                    David Hollingworth began working at the timber mill in 1916
                    at the age of 14 years. At 17 his father died, David was
                    considered too young to hold the reins. The business became
                    a company and a manager was employed. David, however,
                    continued in the business until it was sold to Standard
                    Sawmill Co. of Murwillumbah in 1964, and his son, Nicholson
                    (Nick) Hollingworth, was also employed there.
                  </CardText>
                </ListItem>
                <ListItem>
                  <CardHeader>Nicholson (Nick) Hollingworth</CardHeader>
                  <CardText>
                    Nicholson (Nick) Hollingworth is the fifth generation of his
                    family to be involved with the timber industry. A book, The
                    Mullumbimby Sawmill, has taken many years to compile by
                    well-known family historian Nicholson Hollingworth. The
                    publication fills a gap by recording the many years of
                    history concerning the sawmill at Mullumbimby run mainly by
                    the Hollingworth family. As other mills in the area were
                    purchased by or amalgamated with this mill over the years we
                    also learn some of the history of those mills.
                  </CardText>
                </ListItem>
              </List>
            </Card>
            <hr />
          </div>

          <div className="col-sm-6">
            <Toolbar>
              <ToolbarGroup>
                <ToolbarTitle text="The Scarlett Family" />
              </ToolbarGroup>
            </Toolbar>
            <Card>
              <List>
                <ListItem>
                  <CardHeader>Sir James Scarlett</CardHeader>
                  <CardText>
                    James Scarlett became Attorney-General and Lord Chief Baron
                    of the Exchequer.
                  </CardText>
                </ListItem>
                <ListItem>
                  <CardHeader>Lord Abinger</CardHeader>
                  <CardText>
                    Lord Abinger is the sixth baron, descended from the advocate
                    Sir James Scarlett. Lord Abinger was a barrister by
                    profession and he lived in the traditions of the bar as the
                    deadlies cross-examiner who ever handled a witness in the
                    box.
                  </CardText>
                </ListItem>

                <ListItem>
                  <CardHeader>Hugh Scarlett</CardHeader>
                  <CardText>
                    Major H.R. Scarlett was brother to Lord Abinger. Hugh
                    Scarlett was A.D.C. (Senior Aide) to Sir William Macgregor
                    when Governor of Queensland. Hugh married Miss Marjorie
                    McPhillarny of New South Wales.
                  </CardText>
                </ListItem>

                <ListItem>
                  <CardHeader>L.F. Scarlett</CardHeader>
                  <CardText>
                    L.F. Scarlett is the youngest brother of Lord Abinger. L.F.
                    Scarlett was lent to the Australian Navy, and was lost in
                    the submarine AE1 in the South Seas.
                  </CardText>
                </ListItem>
              </List>
            </Card>
            <hr />
          </div>
        </div>
      </main>
    );
  }
}

export default FamiliesMain;
