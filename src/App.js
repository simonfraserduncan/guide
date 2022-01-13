import './App.css';
import * as React from 'react';
import { useEffect, useState } from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { getUser, createUser, updateUser } from "./api";


function App() {

  const [user, setUser] = useState();

  useEffect(async () => {
    setUser(await getUser());
  }, [setUser]);

  const onSave = async () => {
    if (!user) {
      await createUser(user);
    } else {
      await updateUser(user);
    }
  };

  return (
    <section className="App">

      <header className="App-header">
      
      </header>
      
      <Container maxWidth="sm">
        

        <div className="metadata">

      
        {user && (
          <Box sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
            <span style={{ fontSize: 100 }}>🎹</span>
            <h2>Hello! I'm {user.name}</h2>
            <span>I'm a {user.role}</span>
            <span>I live in {user.location}</span>
          </Box>
        )}
        <Paper
          elevation={3}
          sx={{
            p: 3,
            display: "grid",
            gridGap: 20,
          }}
        >
          <TextField
            label="Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />

          <TextField
            label="Role"
            onChange={(e) => setUser({ ...user, role: e.target.value })}
          />

          <TextField
            label="Location"
            onChange={(e) => setUser({ ...user, location: e.target.value })}
          />

          <Button variant="contained" size="large" fullWidth onClick={onSave}>
            Save
          </Button>
        </Paper>


          {/* <ListItemButton component="a" href="">
            <ListItemText primary="Product Design (Adoption &amp; Growth"/>
          </ListItemButton>

          <ListItemButton>
            <ListItemText primary="Colorado, USA"/>
          </ListItemButton>

          <ListItemButton>
            <ListItemText primary="Central Time"/>
          </ListItemButton> */}
        </div> 
        
        <section className="bodyContent">

          <p>
            Hello current or future coworker! I'm grateful that you're taking the time to learn more about me. With any luck, this guide should give you some direct insight into me as a designer, and as a [flawed] human.
          </p>

          <h2>Who am I?</h2>
          <p>
            During work hours, I'm a product designer at DataStax. I've worked on a bunch of different things at the company, including: transitioning AstraDB to serverless, private endpoints, and research for the operator experience. Most recently, I'm working on our Product Led Growth team. Before, I worked at companies making tools for developers, and in the finance industry.
          </p>
          
          <p>
            Outside of work, I have what feels like a bottomless list of hobbies that are a constant draw to me. Some that come to mind are:
          </p>

          <ul>
            <li>Running and generally doing anything with my wife, Sarah</li>
            <li>Writing electronic music (I studied music at university and used to produce music as a job!)</li>
            <li>Spending time with our dogs Rosie and Bear</li>
            <li>Playing video games or DnD (I'm a huge geek)</li>
          </ul>

          <p>
            I've got omnivert tendencies.  I'm extroverted in some situations, and introverted in others. Presenting to large audiences and certain forms of socializing are easy, if not enjoyable for me. But it's likely that after those things that I'll  feel exhausted. Sometimes my exhaustion might show in me becoming more reclusive. That doesn't always mean something is wrong with me; I may need some space and time to refuel my tanks. I'll always respond if feedback is urgent, or you need something from me, though. If it's non-urgent, it sometimes can take me a while when recharging.
          </p>

          <p>
            I'm a believer that life is too short, and that we should find humor in it along the way. Even - or especially - while at work.
          </p>

          <h2>How to reach me</h2>

          <p>
            Slack and email are best, most times. If it is something that we can discuss async, I'll be much happier more times than not. That said, there are cases where meetings are great. I do like keeping up with folks and definitely enjoy face to face time - especially when first meeting! I'll also prefer to have a quick sync rather than sending a million messages back and forth on slack. 
          </p>

          <p>
            I'm a big believer in Cal Newport's thoughts in Deep Work. So big that I've given talks about it. That means I'm anti-distraction, and try to keep work hours as productive as possible. It might be hypocritical of me to be anti-distraction and pro-slack, but here we are!
          </p>

          <p>
            What does all that mean? I may not respond right away to your message. I definitely won't respond if its out of hours 99 times out of 100. But I will get back to you; I schedule recurring time to do so. If I'm out for a run or walking the dogs, I try to put up a status message letting you know what's up.
          </p>
          
          <p>
          I can get frustrated on days where I spend most of my time managing Slack or in meetings. You can earn points from me by batching requests into more condensed thoughts. Or, by including agendas or context in a meeting request!
          </p>

          <h2>Feedback</h2>

          <p>
            I'm here to work as a member of team and achieve great outcomes. I like it when my work is successful and well crafted on its own, but I care more about the result than direct 'ownership'. I'm receptive to direct feedback both about my work and me. I enjoy thinking about ways to improve both my work and myself, and I often think about that while running.
          </p>

          <p>
            Here are some extra tips in giving me feedback:
          </p>

          <ul>
            <li>Try and deliver it soon after the fact if it's possible. I prefer for things to be fresh, so it's not a question of whether it's been stewing.</li>
            <li>I enjoy feedback framed as questions when answers aren't known.</li>
            <li>If feedback you're giving is very subjective, I may push back and ask for evidence or to engage in a friendly debate. This won't be because you're in some way wrong to me, but because I want to understand your POV.</li>
          </ul>

          <p>
            I try to live by these rules myself, and try to give what I ask for.
          </p>

          <h2>My MVPs</h2>

          <p>
            Building software products is hard going, and imperfect. I aspire to be a pragmatist, with hints of being an idealist. I love it when people acknowledge that things can be scrappy, and that we're building towards something. I love it even more when people can balance scrappiness with one eye on a more 'perfect' future. I love it the most when people can do all that, while solving a clear persona-based problem.
          </p>

          <p>
            Some examples of behaviors I love seeing:
          </p>

          <ul>
            <li>Evaluating whether we're providing a persona real value, or checking a box</li>
            <li>Thinking in iterations - what are we doing now, and what might we be doing in the future? How can we control scope?</li>
            <li>Owning up to not knowing the facts all the time, and making hypothesized efforts</li>
            <li>Implementing a process that leaves a lot of room for personal interpretation</li>
            <li>Iterating in low fidelity at first</li>
          </ul>

          <p>
            While I'm not a pixel perfectionist (as you may have guessed off the back of those points), I do value detail. Once things are in a higher fidelity, I expect them to be at a standard where spacing and details aren't always perfect, but are strong from a details point of view.
          </p>

          <h2>Pitfalls &amp; Idiosyncrasies</h2>

          <p>
            In the spirit of iterating, I plan to come back to this guide and update it. To capture things not yet mentioned, I'm making a grab bag of all my weirdness at the end.
          </p>
          
          <ul>
            <li>I can end up talking a lot. And sometimes (by accident) over people. I don't like this about myself when it happens as I know it can come off as being rude. Most of the time, it comes from a place of excitement and wanting to contribute. You can always shut me off and let me know that you weren't done if I've interrupted you.</li>
            <li>I've become used to speaking in esoteric (or uncommon, unnecessary) language. Yes, this was trying to be meta. This could be down to a thousand different things. If I'm not speaking in a clear, concise manner, call me out. I'm trying hard to get better at this.</li>
            <li>Prescriptive processes can sometimes feel restrictive to me. I'm a fan of function and speed over uniformity, and believe there are times when it makes sense to diverge from a system. If I'm deviating from a process that's important to stay true to, let me know and I'll adjust.</li>
            <li>I'm a recovering perfectionist, and am doing my best to be more transparent. I have visions of what my peers expect of me at times, and try my best to reach them. Those standards are artificial, and much higher than they should be in reality (at times). That can mean I'm sometimes hesitant to share things I think aren't 'ready' yet, when I should be transparent from the beginning. If you want to see my work, ask. I'll get over it.</li>
            <li>I take a lot of things on myself quite often. This isn't because I don't have faith in my peers, it's because I want to try and be helpful to them by reducing their distractions. If you see me overcommitting and taking on work I shouldn't be, call it out.</li>
            <li>Sometimes, I over-value speed. There are times when instead of asking 'why', I ask 'how'. This has led to cut corners in my past, and I'm working on getting better at it. Please make sure I'm able to answer 'why'.</li>
            <li>I joke around a lot and value humor. If you ever feel it's not a time for laughs, it's more than ok to let me know. </li>
          </ul>

        </section>
      </Container>
    </section>
    
  );
}




export default App;

