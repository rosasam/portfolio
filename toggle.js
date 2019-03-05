var current = null;
$(function() {
  $(".title-list > p").click(function() {
    var title = $(this)
      .text()
      .trim();
    $("#textbox-title").html(texts[title][0]);
    console.log(title);
    $("#textbox-text").html(texts[title][1]);
    if (!current) {
      $("#textbox").slideToggle();
      current = title;
    } else if (current == title) {
      $("#textbox").slideToggle();
      current = null;
    } else {
      current = title;
    }
    return false;
  });
});

var texts = {
  "Computer Science": [
    "Knowledge: Computer Science",
    `
Fundamentally, computer science is the theory and practicalities
that explain how a computer works. In today’s world, computers
are being integrated and applied to all kind of products and
processes imaginable. For this reason, an understanding of
computers is certainly beneficial in product design.
<br /><br />
Through my major’s studies at Aalto University I have gathered
knowledge on both the practical and theoretical aspects of
computer science. I have studied 100ETC:s worth of courses
related directly to computer science. These courses have varied
from basic courses in programming languages such as Scala, C and
C++, to more general courses related to topics such as computer
graphics, information security, data structures and algorithms.
<br /><br />
The computer science studies have led to me working for some
tech-companies in Finland. As part of a software project course,
I worked for six months in a team that designed and implemented
an proof-of-concept software for validating and modifying large
CSV-files. This software was developed for the supply chain
management company Relex. Amongst other things, the project
required me to learn to use web frameworks and work with agile
methods. During this project, our team had to solve problems
related to reading and processing big amounts of data (several
gigabytes) efficiently and in-memory.
<br /><br />
I have worked as a Software development intern at Ericsson’s
Research and Development branch in Finland, where I got to apply
my computer science knowledge in a team of eight people in a
project related to cloud computing and security. During my time
at Ericsson, I implemented python-based test suites for two
components in the software. Through the tests, our team managed
to locate and fix several previously unknown bugs.
`
  ],
  "Design Software": [
    "Knowledge: Design Software",
    `
Usually people attribute creativity and an “artistic eye” to
good designers. But there’s something to be said about designers
who are capable of efficiently putting their thoughts into a
tangible form. I have always had a quite technical approach to
design, and I am very comfortable with efficiently operating all
kinds of different design software software. I am especially
familiar with Adobe’s programs, such as Photoshop, InDesign,
Illustrator and Premiere, which are used for image editing,
layout, vector graphics and movie editing respectively.
<br /><br />
Photoshop, InDesign and Illustrator were my essential toolkit in
my four years as a graphic designer. Just from my time working
at a graphic design company, I have put over 1500 hours combined
into working with these programs. Furthermore, I have done
several projects related to photography, movies and graphic
design in my free time, further adding to these hours. Some
examples are the <a href="https://vimeo.com/kehveliproductions">short movie</a> that I made in high school
using Premiere, the magazines (see more in <a href="gallery.html">the gallery.</a>) I did using InDesign, and the over 40 design projects
I did using a combination of Photoshop, InDesign and
Illustrator.
`
  ],

  "Design Thinking": [
    "Skill: Design Thinking",
    `
To quote graphic designer Paul Rand: “Everything is design. Everything”. Good
design is an essential part of any good product. Design is just more than the
look of and feel, it’s the interface with which we interact with an product.
Knowing the user, and adapting to the user’s needs, material choices, concepts,
sketches, prototypes; all this is part of design. I try to incorporate these
thoughts into my projects, from conception to final product.
<br /><br />
Graphic design is a great passion for me. I have worked as an art design
assistant during summers for four years, which started my path to thinking in
terms of design. I’m also active in the guild Teknologföreningen as a
“freelance” graphic designer, and continue to hone my design thinking skills by
creating posters, ad-campaigns and magazines for the guild’s purposes. During
the two years I’ve been doing work for Teknologföreningen I’ve layouted eight
magazines and completed over 40 other design projects, such as marketing
banners, badges and posters. Examples of some these projects can be found in  <a href="gallery.html">the gallery.</a>
<br /><br />
Furthermore, in the three courses I have taken in my minor, Aaltonaut, all have
featured a product design project as part of the course. These projects have
given me a great opportunity to employ my creativity and design thinking to
actual product development problems.`
  ],

  "Teamwork and Leadership": [
    "Skill: Teamwork and Leadership",
    `
Working in groups is inevitable in most lines of work. I can usually get a good
grasp of what a project entails, and like to take matters into my own hands and
make sure that the group succeeds. In my time at Aalto, I have learned the value
of good communication, transparency and compromises. Through my minor Aaltonaut
and other courses at Aalto, I have participated in six course-spanning group
projects. In these courses, in which the grade was entirely based on the success
of the group project and peer evaluation, my average is 4.8/5. Furthermore, I’ve
taken ten other courses where a major part of the course was a group project.
<br /><br />
Outside of school, I am a scout leader, who is responsible for leading a group
of kids on a weekly basis. I have been a scout leader for 5 years, leading
groups of five to ten people. I have also been in charge of organizing events
for the scout troop, such as camping trips and scout skill competitions.
Organizing these events has both been an exercise in both leadership and
teamwork.`
  ],
  Persistency: [
    "Attitude: Persistency",
    `
I’m not one to give up easily. If I set my mind on something, I will try my best
to achieve whatever goal I have set for myself. This does not mean that I
wouldn’t have had setbacks and times when I’ve given up; the important thing is
that I have always picked myself up and continued onwards.
<br /><br />
One way this can be seen in my life is through my running. Three years ago I ran
my first 10k race, two years ago I ran my first half marathon. This year, I’m
training to run my first marathon. Last year, I couldn’t run the race I had
planned because of getting ill, but this has not stopped me from training and
looking for new opportunities.
<br /><br />
I have also shown persistence in my studies. When I started studying computer
science, I had practically zero programming skills, and was frustrated with how
slowly I wrote code compared to my more experienced peers. Now I am at the verge
of completing my Bachelor’s program in Computer Science, and work part-time as a
capable software developer.`
  ],
  Innovation: [
    "Attitude: Innovation",
    `
I am a curious person. I want to know how stuff works, and once I learn that, I
start thinking how it could be improved.
<br /><br />
I actively try to discover new ideas and try them out. Even if a trial fails, it
is better than not trying at all. I have participated twice in the hackathon
Junction, which consisted of over 5000 participants last year. Last year, my
team created a “social alarm clock” app that would wake you and your friends up
at the same time. We couldn’t finish the project during the hackathon since we
lacked the technical expertise on how to do real-time streaming between several
mobile devices, but the concept of the project was still well received during
the event.
<br /><br />
My career choices also reflect my innovative attitude: I have enjoyed jobs in
which I can make meaningful changes for the company. During my time as a graphic
design intern at MAO Design, I redesigned the look of their school calendars.
The new design was picked up by a new client. Currently, I work at a
three-person tech startup, where my ideas have led to a faster workflow when
using our company’s internal software.`
  ],
  Modulen: [
    "Modulen",
    `<img src="assets/img/moduler.jpg" alt="Modulen" />
  <p>Modulen is the official magazine for Teknologföreningen. I have layouted 8 
  of these magazines in 2017 to 2019. More can be found at 
  <a href="https://issuu.com/modulen">Issuu</a></p>`
  ],
  Miscellaneous: [
    "Miscellaneous",
    `<img src="assets/img/kort.jpg" alt="Modulen" /> <p>I've also designed badges, 
  illustrated invitation cards and created other forms of print media.</p>`
  ],
  Phuxblaskan: [
    "Phuxblaskan",
    `<img src="assets/img/blaskor.jpg" alt="Modulen" /> <p>Phuxblaskan
  is an information package sent to new students at Aalto. I created a new look for the layout 
  and produced two of these print products.</p>`
  ]
};
