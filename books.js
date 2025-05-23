document.addEventListener('DOMContentLoaded', () => {
    console.log("Books.js loaded");
    
    const booksContainer = document.getElementById('booksContainer');
    if (booksContainer) {
        console.log("Books container found");
        
        window.books = [
            {
                title: "Sherlock Holmes and the Hound of the Baskervilles",
                author: "Sir Arthur Conan Doyle",
                year: "1902",
                description: "A chilling mystery where Sherlock Holmes investigates the legend of a supernatural hound terrorizing the Baskerville family.",
                longDescription: "The Hound of the Baskervilles is one of Sherlock Holmes's most famous cases. When Sir Charles Baskerville is found dead with the footprints of a gigantic hound nearby, Holmes and Watson must unravel the mystery of the legendary supernatural beast that haunts the moors. As the new heir arrives at Baskerville Hall, Holmes must solve the case before the family curse claims another victim. This thrilling tale combines detective work with elements of horror on the foggy, desolate moors of Dartmoor.",
                image: "Books/WhatsApp Image 2025-05-10 at 10.58.35 PM (2).jpeg",
                category: "mystery",
                downlaod: "houn.pdf"
            },
            {
                title: "The Adventures of Sherlock Holmes",
                author: "Sir Arthur Conan Doyle",
                year: "1892",
                description: "A collection of twelve thrilling short stories featuring the brilliant detective Sherlock Holmes and his loyal friend Dr. Watson.",
                longDescription: "The Adventures of Sherlock Holmes is a collection of twelve classic detective stories published in 1892. Each tale showcases Holmes's extraordinary deductive abilities as he solves seemingly impossible cases. From 'A Scandal in Bohemia' featuring the unforgettable Irene Adler to 'The Red-Headed League' with its bizarre job offer, these stories established Sherlock Holmes as literature's most famous detective. Narrated by Dr. Watson, these adventures take readers through Victorian London's foggy streets and into the mind of the world's greatest consulting detective.",
                image: "Books/WhatsApp Image 2025-05-10 at 10.58.35 PM (1).jpeg",
                category: "mystery"
            },
            {
                title: "THE COMPLETE SHERLOCK HOLMES",
                author: "Sir Arthur Conan Doyle",
                year: "1902",
                description: "The classic detective novel featuring Sherlock Holmes investigating a family curse and a monstrous hound on the foggy moors.",
                longDescription: "This meticulously crafted edition compiles every iconic adventure of Sherlock Holmes, from his debut in A Study in Scarlet to his final enigmas in The Case-Book of Sherlock Holmes. The cover, designed by Jim Tierney, immerses readers in Holmes' shadowy world with hauntingly atmospheric visuals—think gaslit alleyways, swirling Victorian fog, and cryptic symbols woven into the design. Tierney's bold, vintage-inspired typography and moody color palette evoke the suspense and intellect of Doyle's detective, while subtle artistic nods (a magnifying glass, a violin, or a silhouette of the Baker Street duo) hint at the stories within.",
                image: "Books/Jim Tierney.jpg",
                category: "mystery",
            },
            {
                title: "Harry Potter and the Philosopher's Stone",
                author: "J.K. Rowling",
                year: "1997",
                description: "The first adventure of the young wizard Harry Potter as he discovers a magical world and his destiny at Hogwarts School of Witchcraft and Wizardry.",
                longDescription: "Harry Potter has never been the star of a Quidditch team, scoring points while riding a broom far above the ground. He knows no spells, has never helped to hatch a dragon, and has never worn a cloak of invisibility. All he knows is a miserable life with the Dursleys, his horrible aunt and uncle, and their abominable son, Dudley. Harry's room is a tiny closet at the foot of the stairs, and he hasn't had a birthday party in eleven years. But all that is about to change when a mysterious letter arrives by owl messenger: a letter with an invitation to an incredible place that Harry—and anyone who reads about him—will find unforgettable. For it's there that he finds not only friends, aerial sports, and magic in everything from classes to meals, but a great destiny that's been waiting for him... if Harry can survive the encounter.",
                image: "Books/WhatsApp Image 2025-05-10 at 10.58.35 PM.jpeg",
                category: "fantasy",
                download:"books_pdfs/Harry-Potter-and-the-Philosophers-Stone.pdf"
            },
            {
                title: "Harry Potter and the Chamber of Secrets",
                author: "J.K. Rowling",
                year: "1998",
                description: "In his second year at Hogwarts, Harry Potter must solve the mystery of the Chamber of Secrets as students are being attacked by an unknown force.",
                longDescription: "The Dursleys were so mean and hideous that summer that all Harry Potter wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he's packing his bags, Harry receives a warning from a strange, impish creature named Dobby who says that if Harry Potter returns to Hogwarts, disaster will strike. And strike it does. For in Harry's second year at Hogwarts, fresh torments and horrors arise, including an outrageously stuck-up new professor, Gilderoy Lockhart, a spirit named Moaning Myrtle who haunts the girls' bathroom, and the unwanted attentions of Ron Weasley's younger sister, Ginny. But each of these seem minor annoyances when the real trouble begins, and someone -- or something -- starts turning Hogwarts students to stone. Could it be Draco Malfoy, a more poisonous rival than ever? Could it possibly be Hagrid, whose mysterious past is finally told? Or could it be the one everyone at Hogwarts most suspects... Harry Potter himself?",
                image: "Books/WhatsApp Image 2025-05-10 at 10.58.36 PM (1).jpeg",
                category: "fantasy"
            },
            {
                title: "Sherlock Holmes & Mr. Hyde: The Classified Dossier",
                author: "James Lovegrove",
                year: "1892",
                description: "Sherlock Holmes & Mr. Hyde: The Classified Dossier by James Lovegrove A thrilling mashup where Holmes confronts the infamous Mr. Hyde. Uncover a secret dossier linking Victorian London's greatest detective to literature's most monstrous alter ego.",
                longDescription: "In this \"exuberant, reverent mashup\" (James Lovegrove), Sherlock Holmes faces his most uncanny adversary yet: Edward Hyde, the brutish counterpart to Dr. Jekyll. When a series of gruesome murders terrorizes London, Holmes and Watson uncover a classified dossier connecting the crimes to Hyde's sinister legacy. Blending Arthur Conan Doyle's deductive genius with Robert Louis Stevenson's gothic horror, Lovegrove crafts a gripping tale where logic clashes with primal savagery. The narrative unfolds through case notes, encrypted letters, and Holmes' own deductions, mimicking a clandestine investigative file. As Holmes navigates fog-drenched alleyways and shadowy laboratories, readers are plunged into a duel of wits against a foe who defies reason. Can even the Great Detective unravel a mystery where science, madness, and monstrosity intertwine? Perfect for fans of cross-genre adventures, this novel reimagines two iconic figures in a pulse-pounding battle for Victorian London's soul.",
                image: "Books/download.jpg",
                category: "mystery"
            },
            {
                title: "Alone in the Moor",
                author: "Author Name",
                year: "2020",
                description: "A haunting psychological thriller about isolation and the secrets of an abandoned house on the desolate moors.",
                longDescription: "When journalist Emma Carter inherits an old, abandoned house on the remote Yorkshire moors, she sees it as an opportunity to escape her troubled past and start fresh. But from the moment she arrives, strange occurrences begin to plague her. The locals avoid the property, speaking of old legends and tragedies. As winter sets in and Emma becomes increasingly isolated, she discovers disturbing journals hidden within the house's walls, revealing a dark history that seems to be repeating itself. With each passing night, the line between reality and nightmare blurs, forcing Emma to confront not only the house's secrets but also the truth she's been running from.",
                image: "Books/WhatsApp Image 2025-05-10 at 10.58.37 PM (1).jpeg",
                category: "mystery",
            },
            {
                title: "House of Pain",
                author: "Author Name",
                year: "2021",
                description: "A bone-chilling horror novel about a notorious haunted house with a history of disappearances and unexplained phenomena.",
                longDescription: "Five paranormal investigators accept a challenge to spend a week in the infamous Blackwood Manor, known locally as the 'House of Pain.' For decades, the abandoned Victorian mansion has been the subject of terrifying legends and unexplained disappearances. Armed with cameras and scientific equipment, the team plans to debunk the myths surrounding the house. But as night falls, they begin to experience horrifying manifestations that defy rational explanation. One by one, the house reveals its secrets, trapping them in a nightmare where the boundary between the living and the dead dissolves. What started as a research project becomes a desperate fight for survival as they uncover the truth behind the house's dark history.",
                image: "Books/WhatsApp Image 2025-05-10 at 10.58.37 PM.jpeg",
                category: "crime",
            },
            {
                title: "The Ashes & the Star-Cursed King",
                author: "Carissa Broadbent",
                year: "2022",
                description: "The second book in the Nightborn Duet, a dark fantasy series set in the enchanting world of Nyaxia.",
                longDescription: "In the aftermath of devastating betrayal, Crown Prince Auren finds himself a prisoner of the Nightborn, his kingdom in ruins and his powers fading. Meanwhile, his former assassin and reluctant ally, Mayla, navigates a dangerous path through court intrigue as ancient forces awaken across the land. With enemies closing in from all sides, they must uncover long-buried secrets about the Star Curse that binds their fates together. As war looms and magical boundaries crumble, Auren and Mayla discover that salvation may lie in the very darkness they were taught to fear. The Ashes & the Star-Cursed King weaves a tale of forbidden magic, political intrigue, and a romance that defies the boundaries between light and shadow.",
                image: "Books/WhatsApp Image 2025-05-10 at 10.58.38 PM (1).jpeg",
                category: "fantasy",
            },
            {
                title: "The Wicked King",
                author: "Holly Black",
                year: "2019",
                description: "The second book in the Folk of the Air series, where mortal Jude must navigate the treacherous fae court as she protects a dangerous secret.",
                longDescription: "After the jaw-dropping revelation that Oak is the heir to Faerie, Jude must keep her younger brother safe. To do so, she has bound the wicked king, Cardan, to her, and made herself the power behind the throne. But Cardan does everything in his power to humiliate and undermine her, even as his fascination with her remains undiminished. When it becomes all too clear that someone close to Jude means to betray her, threatening her own life and the lives of everyone she loves, Jude must uncover the traitor and fight her own complicated feelings for Cardan to maintain control as a mortal in a Faerie world where she is vulnerable and where one misstep could mean her death.",
                image: "Books/WhatsApp Image 2025-05-10 at 10.58.38 PM (2).jpeg",
                category: "fantasy",
            },
            {
                title: "Crime Scene",
                author: "Author Name",
                year: "2022",
                description: "A gripping thriller where a seasoned detective must solve a series of murders connected by mysterious red roses left at each crime scene.",
                longDescription: "Detective Alex Morgan has seen her share of crime scenes, but nothing like the meticulous stagings she's now encountering. At each murder scene, a bouquet of red roses sits untouched among the chaos, a calling card for a killer who seems to be leaving personal messages for her. As the body count rises across the city, Morgan races to decode the significance of the roses and connect the seemingly unrelated victims. When the investigation leads her to a cold case from her own past, Morgan realizes the killer has been watching her for years, and this elaborate game is more personal than she ever imagined. With time running out and pressure mounting from department officials, Morgan must confront her own demons to catch a killer who knows her all too well.",
                image: "Books/WhatsApp Image 2025-05-10 at 10.58.38 PM.jpeg",
                category: "crime",
                downlaod:"books_pdfs/crime.pdf"
            },
            {
                title: "A Court of Frost and Starlight",
                author: "Sarah J. Maas",
                year: "2018",
                description: "A novella set in the Court of Thorns and Roses universe, following Feyre and her companions as they celebrate the Winter Solstice after the war.",
                longDescription: "The Winter Solstice is approaching in the enchanting world of Prythian. For Feyre, the first Winter Solstice since the war against Hybern offers a chance to focus on healing and rebuilding. Despite the festive atmosphere in Velaris, shadows of the conflict still linger. As Feyre navigates her new role as High Lady of the Night Court alongside her mate Rhysand, she must also help her found-family overcome their own traumas. Through alternating perspectives, we glimpse how each character is coping with the aftermath of war while preparing for a holiday celebration that may just bring them the peace and closure they seek. This novella bridges the events between the original trilogy and the next phase of their story.",
                image: "Books/WhatsApp Image 2025-05-10 at 10.58.39 PM (1).jpeg",
                category: "fantasy",
            },
            {
                title: "Heir of Fire",
                author: "Sarah J. Maas",
                year: "2014",
                description: "The third book in the Throne of Glass series follows Celaena Sardothien's journey to the distant empire of Wendlyn where she must confront her past and embrace her destiny.",
                longDescription: "Celaena Sardothien has survived deadly contests and shattering heartbreak, but now she must travel to a new land to confront her darkest truth. In the distant empire of Wendlyn, Celaena meets Rowan, a fierce warrior who will become both her trainer and most challenging ally. As she learns to harness her dormant magical powers, Celaena must decide who she will fight for as dark forces gather. Meanwhile, back in Adarlan, brutal contests are being held to find the king's next Champion, and Chaol is determined to uncover the truth about rebel movements while protecting those he loves. As parallel plots unfold, Celaena must accept who and what she has become if she is to save those she cares about and take her place in an epic battle between light and darkness.",
                image: "Books/WhatsApp Image 2025-05-10 at 10.58.39 PM.jpeg",
                category: "fantasy",
            },
            {
                title: "The Psychology of Money",
                author: "Morgan Housel",
                year: "2020",
                description: "Timeless lessons on wealth, greed, and happiness, exploring how psychology drives our relationship with money more than financial knowledge.",
                longDescription: "In 'The Psychology of Money,' Morgan Housel shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life's most important topics. The book isn't about what to do with your money; it's about how to think more clearly about money and financial decisions. Through a series of stories and examples, Housel demonstrates that success with money isn't about what you know, but about how you behave. He argues that financial success is not a hard science—it's a soft skill where how you behave is more important than what you know. The book delves into topics like why people make irrational financial decisions, the role of luck and risk, the importance of reasonable expectations, and why wealth and happiness don't always correlate. With over seven million copies sold worldwide, this international bestseller offers invaluable insights for both seasoned investors and those just beginning their financial journey.",
                image: "Books/WhatsApp Image 2025-05-10 at 10.58.40 PM (1).jpeg",
                category: "philosophy",
                downlaod: "books_pdfs/money.pdf"
            },
            {
                title: "Atomic Habits",
                author: "James Clear",
                year: "2018",
                description: "An easy and proven way to build good habits and break bad ones through tiny changes that yield remarkable results.",
                longDescription: "In 'Atomic Habits,' James Clear presents a practical framework for improving everyday life by forming good habits, breaking bad ones, and mastering the tiny behaviors that lead to remarkable results. Drawing on established ideas from biology, psychology, and neuroscience, Clear delivers a comprehensive guide on habit formation. The book explains how small, incremental, everyday routines compound into massive, positive changes over time. Clear distills complex topics into simple behaviors that can be easily applied to daily life and work. From building a system for getting 1% better every day to breaking bad habits through understanding habit loops, the book offers actionable strategies for transforming habits. Packed with evidence-based strategies, 'Atomic Habits' teaches practical tips for installing new habits by harnessing the power of the four laws of behavior change. With millions of copies sold worldwide, this international bestseller has changed countless lives by revealing how simple changes can have life-transforming effects.",
                image: "Books/WhatsApp Image 2025-05-10 at 10.58.40 PM (2).jpeg",
                category: "self-help",
                download: "books_pdfs/Atomic-Habits-PDF-Download.pdf"
            },
            {
                title: "The Alchemist",
                author: "Paulo Coelho",
                year: "1988",
                description: "A philosophical novel about a young Andalusian shepherd who journeys to the Egyptian pyramids in search of treasure, only to find wisdom and his destiny.",
                longDescription: "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, recognizing opportunity, and following our dreams. Along the way, he meets various characters who guide him toward his Personal Legend, including a mysterious alchemist who teaches him to listen to his heart and follow the language of omens. Lush with evocative wisdom and magical symbolism, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers. This enchanting fable blends spirituality, folklore, and dream psychology into a simple yet profound tale about finding one's purpose in life.",
                image: "Books/WhatsApp Image 2025-05-10 at 10.58.40 PM (3).jpeg",
                category: "philosophy",
                downlaod: "books_pdfs\The Alchemist -- Coelho, Paulo -- 25th Anniversary Edition, 2015 -- HarperCollins Publishers -- 9780062315007 -- 9c7ed83ddf9d97875bb60be152b0c0e7 -- Anna's Archive.pdf"
            },
            {
                title: "The 5 AM Club",
                author: "Robin Sharma",
                year: "2018",
                description: "Own your morning, elevate your life. A guide to revolutionizing your life by waking up early and maximizing the first hours of your day.",
                longDescription: "In 'The 5 AM Club,' legendary leadership and elite performance expert Robin Sharma introduces a morning routine that has helped his clients maximize their productivity, activate their best health, and bulletproof their serenity in this age of overwhelming complexity. Through an enchanting and often amusing story about two struggling strangers who meet an eccentric tycoon who becomes their secret mentor, The 5 AM Club shares the little-known formula Sharma has used to help his clients become world-class in their fields. The book presents the '20/20/20 formula': spending the first 20 minutes of your day exercising, the next 20 minutes reflecting, and the final 20 minutes growing. This revolutionary routine helps its practitioners build willpower, enhance creativity, boost productivity, and experience less stress. Combining cutting-edge science with ancient wisdom and proven techniques from the world's most successful people, this book shows how to transform your life and reach your highest potential by making one small change to your daily routine.",
                image: "Books/WhatsApp Image 2025-05-10 at 10.58.40 PM (4).jpeg",
                category: "self-help",
                download: "books_pdfs/the-5am-club.pdf"
            },
            {
                title: "Powerless",
                author: "Lauren Roberts",
                year: "2023",
                description: "Hunted. Hunter. Destined for each other. A fantasy romance where a girl with no magic must defeat the realm's most powerful royal.",
                longDescription: "In a world where magic is power and status, Paige Montford is the only person born without magic. Banished from her noble family for her defect, Paige has learned to survive by her wits and skill with a blade. When she's abducted and forced to participate in the Mage Trials, a deadly competition where the champions of each realm battle for glory, Paige must face competitors with devastating magical abilities while she has none. The realm's most powerful royal, Prince Aiden Callaghan, has never been defeated. Known for his cruelty in the arena, he's determined to maintain his perfect record. But when he discovers his next opponent is powerless, he's intrigued rather than dismissive. As Paige navigates the dangerous world of court politics and ancient rivalries, she finds herself drawn to the prince who should be her enemy. Their forbidden attraction complicates an already deadly game where the stakes are higher than just their lives. Set in a richly imagined world of magic and intrigue, Powerless explores themes of identity, resilience, and finding strength in unexpected places.",
                image: "Books/WhatsApp Image 2025-05-10 at 10.58.40 PM.jpeg",
                category: "fantasy",
                download: "books_pdfs/powerless.pdf"
            },
            {
                title: "Read People Like a Book",
                author: "Patrick King",
                year: "2021",
                description: "How to analyze, understand, and predict people's emotions, thoughts, intentions, and behaviors through practical psychology and body language analysis.",
                longDescription: "In 'Read People Like a Book,' bestselling author and social skills coach Patrick King offers a comprehensive guide to understanding human behavior and reading people effectively. This practical manual draws on techniques from psychology, behavioral analysis, and body language interpretation to help readers decipher what others are really thinking and feeling, regardless of what they're saying. The book breaks down the complex science of human behavior into digestible chapters, covering everything from facial micro-expressions and voice tone analysis to understanding psychological motivations and emotional triggers. King provides actionable frameworks for identifying lies, detecting hidden emotions, and predicting future behaviors based on present patterns. Rather than relying on pseudoscience or generalized stereotypes, the book grounds its approach in empirical research and practical real-world applications. Whether for professional settings, personal relationships, or simply navigating social situations with greater awareness, this guide equips readers with the tools to see beyond surface-level interactions and understand the deeper meanings behind human behavior.",
                image: "Books/WhatsApp Image 2025-05-10 at 10.58.41 PM.jpeg",
                category: "self-help",
                downlaod:"books_pdfs/ReadPeople.pdf"
            }
        ];

        console.log(`Made ${window.books.length} books available globally`);

        window.createBookCard = function(book) {
            const card = document.createElement('div');
            card.className = 'custom-card';
            card.dataset.category = book.category;
            card.innerHTML = `
                <div class="card-content">
                    <img src="${book.image}" alt="${book.title}" class="card-image">
                    <div class="card-text">
                        <h4 class="card-title">${book.title}</h4>
                        <p class="card-description">${book.description}</p>
                    </div>
                </div>
            `;
            card.addEventListener('click', function() {
                localStorage.setItem('selectedBook', JSON.stringify(book));
                window.location.href = 'book-detail.html';
            });
            return card;
        };

        window.displayBooks = function(category = 'all') {
            console.log(`Displaying books for category: ${category}`);
            
            const urlParams = new URLSearchParams(window.location.search);
            const searchParam = urlParams.get('search');
            
            // Don't display books if we're in search mode - search.js will handle it
            if (searchParam) {
                console.log("In search mode, not displaying regular books");
                return;
            }
            
            booksContainer.innerHTML = '';
            
            const filteredBooks = category === 'all' 
                ? window.books  
                : window.books.filter(book => book.category === category);
                
            console.log(`Displaying ${filteredBooks.length} books`);
            

            filteredBooks.forEach(book => {
                booksContainer.appendChild(window.createBookCard(book));
            });
        };

  
        const urlParams = new URLSearchParams(window.location.search);
        const searchParam = urlParams.get('search');
  
        if (!searchParam) {
            console.log("No search parameter, displaying all books");
      
            setTimeout(() => {
                window.displayBooks('all');
                
                // Set up category buttons
                const categoryButtons = document.querySelectorAll('.custom-btn');
                categoryButtons.forEach(button => {
                    button.addEventListener('click', function() {

                        categoryButtons.forEach(btn => btn.classList.remove('active'));

                        this.classList.add('active');

                        window.displayBooks(this.dataset.category);
                    });
                });
            }, 100);
        }
    }
});

   document.addEventListener('DOMContentLoaded', () => {

            const container = document.querySelector('.recommended-books-scrollable');
            const prevButton = document.getElementById('prevButton');
            const nextButton = document.getElementById('nextButton');
            
            if (container && prevButton && nextButton) {

                const scrollAmount = container.offsetWidth * 0.8;
                
                nextButton.addEventListener('click', function() {
                    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                });
                
                prevButton.addEventListener('click', function() {
                    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                });
            }
        });
        

        function saveBookAndRedirect(title, author, year, description, image, category) {
            const book = {
                title: title,
                author: author,
                year: year,
                description: description,
                longDescription: description,
                image: image,
                category: category
            };
            localStorage.setItem('selectedBook', JSON.stringify(book));
            window.location.href = 'book-detail.html';
        }

        const book = JSON.parse(localStorage.getItem('selectedBook'));
if (book) {
    document.getElementById('detailTitle').textContent = book.title;
    document.getElementById('detailAuthor').textContent = book.author || 'Unknown Author';
    document.getElementById('detailYear').textContent = book.year || 'Year';
    document.getElementById('detailCategory').textContent = (book.category || '').toUpperCase();
    document.getElementById('detailDescription').textContent = book.longDescription || book.description;
    document.getElementById('detailCover').src = book.image;
    document.getElementById('detailCover').alt = book.title;
    document.getElementById('detailDownload').href = book.download;
}
