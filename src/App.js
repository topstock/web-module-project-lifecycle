import React from 'react';
import FollowerList from './components/FollowerList';
import User from './components/User';
import axios from 'axios';

class App extends React.Component {
  state = {
    profileData: {
      "login": "topstock",
      "id": 81811191,
      "node_id": "MDQ6VXNlcjgxODExMTkx",
      "avatar_url": "https://avatars.githubusercontent.com/u/81811191?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/topstock",
      "html_url": "https://github.com/topstock",
      "followers_url": "https://api.github.com/users/topstock/followers",
      "following_url": "https://api.github.com/users/topstock/following{/other_user}",
      "gists_url": "https://api.github.com/users/topstock/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/topstock/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/topstock/subscriptions",
      "organizations_url": "https://api.github.com/users/topstock/orgs",
      "repos_url": "https://api.github.com/users/topstock/repos",
      "events_url": "https://api.github.com/users/topstock/events{/privacy}",
      "received_events_url": "https://api.github.com/users/topstock/received_events",
      "type": "User",
      "site_admin": false,
      "name": "Phillip Galbraith",
      "company": null,
      "blog": "",
      "location": "Bremerton, WA",
      "email": null,
      "hireable": null,
      "bio": "Full-Stack, Lambda School Student, theOdinProject participant, C# fan,  Seeking experience in Front End and long term UI/UX",
      "twitter_username": "FillGalbraith",
      "public_repos": 47,
      "public_gists": 0,
      "followers": 22,
      "following": 30,
      "created_at": "2021-04-02T11:56:58Z",
      "updated_at": "2021-10-28T19:50:38Z"
    },
    followersData: [
      {
        "login": "UrukuTelal",
        "id": 14800115,
        "node_id": "MDQ6VXNlcjE0ODAwMTE1",
        "avatar_url": "https://avatars.githubusercontent.com/u/14800115?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/UrukuTelal",
        "html_url": "https://github.com/UrukuTelal",
        "followers_url": "https://api.github.com/users/UrukuTelal/followers",
        "following_url": "https://api.github.com/users/UrukuTelal/following{/other_user}",
        "gists_url": "https://api.github.com/users/UrukuTelal/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/UrukuTelal/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/UrukuTelal/subscriptions",
        "organizations_url": "https://api.github.com/users/UrukuTelal/orgs",
        "repos_url": "https://api.github.com/users/UrukuTelal/repos",
        "events_url": "https://api.github.com/users/UrukuTelal/events{/privacy}",
        "received_events_url": "https://api.github.com/users/UrukuTelal/received_events",
        "type": "User",
        "site_admin": false
      },
      {
        "login": "Jmz0127",
        "id": 45055471,
        "node_id": "MDQ6VXNlcjQ1MDU1NDcx",
        "avatar_url": "https://avatars.githubusercontent.com/u/45055471?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Jmz0127",
        "html_url": "https://github.com/Jmz0127",
        "followers_url": "https://api.github.com/users/Jmz0127/followers",
        "following_url": "https://api.github.com/users/Jmz0127/following{/other_user}",
        "gists_url": "https://api.github.com/users/Jmz0127/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Jmz0127/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Jmz0127/subscriptions",
        "organizations_url": "https://api.github.com/users/Jmz0127/orgs",
        "repos_url": "https://api.github.com/users/Jmz0127/repos",
        "events_url": "https://api.github.com/users/Jmz0127/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Jmz0127/received_events",
        "type": "User",
        "site_admin": false
      },
      {
        "login": "aaronpear",
        "id": 56135909,
        "node_id": "MDQ6VXNlcjU2MTM1OTA5",
        "avatar_url": "https://avatars.githubusercontent.com/u/56135909?v=4",
        "gravatar_id": "",
       "url": "https://api.github.com/users/aaronpear",
        "html_url": "https://github.com/aaronpear",
        "followers_url": "https://api.github.com/users/aaronpear/followers",
        "following_url": "https://api.github.com/users/aaronpear/following{/other_user}",
        "gists_url": "https://api.github.com/users/aaronpear/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/aaronpear/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/aaronpear/subscriptions",
        "organizations_url": "https://api.github.com/users/aaronpear/orgs",
        "repos_url": "https://api.github.com/users/aaronpear/repos",
        "events_url": "https://api.github.com/users/aaronpear/events{/privacy}",
        "received_events_url": "https://api.github.com/users/aaronpear/received_events",
        "type": "User",
        "site_admin": false
      },
      {
        "login": "jmerz826",
        "id": 60374084,
        "node_id": "MDQ6VXNlcjYwMzc0MDg0",
        "avatar_url": "https://avatars.githubusercontent.com/u/60374084?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/jmerz826",
        "html_url": "https://github.com/jmerz826",
        "followers_url": "https://api.github.com/users/jmerz826/followers",
        "following_url": "https://api.github.com/users/jmerz826/following{/other_user}",
        "gists_url": "https://api.github.com/users/jmerz826/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/jmerz826/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/jmerz826/subscriptions",
        "organizations_url": "https://api.github.com/users/jmerz826/orgs",
        "repos_url": "https://api.github.com/users/jmerz826/repos",
        "events_url": "https://api.github.com/users/jmerz826/events{/privacy}",
        "received_events_url": "https://api.github.com/users/jmerz826/received_events",
        "type": "User",
        "site_admin": false
      },
      {
        "login": "krystleM26",
        "id": 61578720,
        "node_id": "MDQ6VXNlcjYxNTc4NzIw",
        "avatar_url": "https://avatars.githubusercontent.com/u/61578720?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/krystleM26",
        "html_url": "https://github.com/krystleM26",
        "followers_url": "https://api.github.com/users/krystleM26/followers",
        "following_url": "https://api.github.com/users/krystleM26/following{/other_user}",
        "gists_url": "https://api.github.com/users/krystleM26/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/krystleM26/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/krystleM26/subscriptions",
        "organizations_url": "https://api.github.com/users/krystleM26/orgs",
        "repos_url": "https://api.github.com/users/krystleM26/repos",
        "events_url": "https://api.github.com/users/krystleM26/events{/privacy}",
        "received_events_url": "https://api.github.com/users/krystleM26/received_events",
        "type": "User",
        "site_admin": false
      },
      {
        "login": "SheebaHashmi",
        "id": 64197466,
        "node_id": "MDQ6VXNlcjY0MTk3NDY2",
        "avatar_url": "https://avatars.githubusercontent.com/u/64197466?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/SheebaHashmi",
        "html_url": "https://github.com/SheebaHashmi",
        "followers_url": "https://api.github.com/users/SheebaHashmi/followers",
        "following_url": "https://api.github.com/users/SheebaHashmi/following{/other_user}",
        "gists_url": "https://api.github.com/users/SheebaHashmi/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/SheebaHashmi/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/SheebaHashmi/subscriptions",
        "organizations_url": "https://api.github.com/users/SheebaHashmi/orgs",
        "repos_url": "https://api.github.com/users/SheebaHashmi/repos",
        "events_url": "https://api.github.com/users/SheebaHashmi/events{/privacy}",
        "received_events_url": "https://api.github.com/users/SheebaHashmi/received_events",
        "type": "User",
        "site_admin": false
      },
      {
      "login": "Ogden-R",
      "id": 84491111,
      "node_id": "MDQ6VXNlcjg0NDkxMTEx",
      "avatar_url": "https://avatars.githubusercontent.com/u/84491111?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Ogden-R",
      "html_url": "https://github.com/Ogden-R",
      "followers_url": "https://api.github.com/users/Ogden-R/followers",
      "following_url": "https://api.github.com/users/Ogden-R/following{/other_user}",
      "gists_url": "https://api.github.com/users/Ogden-R/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Ogden-R/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Ogden-R/subscriptions",
      "organizations_url": "https://api.github.com/users/Ogden-R/orgs",
      "repos_url": "https://api.github.com/users/Ogden-R/repos",
      "events_url": "https://api.github.com/users/Ogden-R/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Ogden-R/received_events",
      "type": "User",
      "site_admin": false
      },
      {
      "login": "savmaxwell93",
      "id": 85320713,
      "node_id": "MDQ6VXNlcjg1MzIwNzEz",
      "avatar_url": "https://avatars.githubusercontent.com/u/85320713?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/savmaxwell93",
      "html_url": "https://github.com/savmaxwell93",
      "followers_url": "https://api.github.com/users/savmaxwell93/followers",
      "following_url": "https://api.github.com/users/savmaxwell93/following{/other_user}",
      "gists_url": "https://api.github.com/users/savmaxwell93/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/savmaxwell93/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/savmaxwell93/subscriptions",
      "organizations_url": "https://api.github.com/users/savmaxwell93/orgs",
      "repos_url": "https://api.github.com/users/savmaxwell93/repos",
      "events_url": "https://api.github.com/users/savmaxwell93/events{/privacy}",
      "received_events_url": "https://api.github.com/users/savmaxwell93/received_events",
      "type": "User",
      "site_admin": false
      },
      {
      "login": "bugsbrog",
      "id": 85898207,
      "node_id": "MDQ6VXNlcjg1ODk4MjA3",
      "avatar_url": "https://avatars.githubusercontent.com/u/85898207?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bugsbrog",
      "html_url": "https://github.com/bugsbrog",
      "followers_url": "https://api.github.com/users/bugsbrog/followers",
      "following_url": "https://api.github.com/users/bugsbrog/following{/other_user}",
      "gists_url": "https://api.github.com/users/bugsbrog/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/bugsbrog/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/bugsbrog/subscriptions",
      "organizations_url": "https://api.github.com/users/bugsbrog/orgs",
      "repos_url": "https://api.github.com/users/bugsbrog/repos",
      "events_url": "https://api.github.com/users/bugsbrog/events{/privacy}",
      "received_events_url": "https://api.github.com/users/bugsbrog/received_events",
      "type": "User",
      "site_admin": false
      },
      {
      "login": "scriptsalmon",
      "id": 86332140,
      "node_id": "MDQ6VXNlcjg2MzMyMTQw",
      "avatar_url": "https://avatars.githubusercontent.com/u/86332140?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/scriptsalmon",
      "html_url": "https://github.com/scriptsalmon",
      "followers_url": "https://api.github.com/users/scriptsalmon/followers",
      "following_url": "https://api.github.com/users/scriptsalmon/following{/other_user}",
      "gists_url": "https://api.github.com/users/scriptsalmon/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/scriptsalmon/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/scriptsalmon/subscriptions",
      "organizations_url": "https://api.github.com/users/scriptsalmon/orgs",
      "repos_url": "https://api.github.com/users/scriptsalmon/repos",
      "events_url": "https://api.github.com/users/scriptsalmon/events{/privacy}",
      "received_events_url": "https://api.github.com/users/scriptsalmon/received_events",
      "type": "User",
      "site_admin": false
      },
      {
      "login": "BrittniKarat",
      "id": 86545296,
      "node_id": "MDQ6VXNlcjg2NTQ1Mjk2",
      "avatar_url": "https://avatars.githubusercontent.com/u/86545296?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/BrittniKarat",
      "html_url": "https://github.com/BrittniKarat",
      "followers_url": "https://api.github.com/users/BrittniKarat/followers",
      "following_url": "https://api.github.com/users/BrittniKarat/following{/other_user}",
      "gists_url": "https://api.github.com/users/BrittniKarat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/BrittniKarat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/BrittniKarat/subscriptions",
      "organizations_url": "https://api.github.com/users/BrittniKarat/orgs",
      "repos_url": "https://api.github.com/users/BrittniKarat/repos",
      "events_url": "https://api.github.com/users/BrittniKarat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/BrittniKarat/received_events",
      "type": "User",
      "site_admin": false
      },
      {
      "login": "s-oshitade",
      "id": 87016257,
      "node_id": "MDQ6VXNlcjg3MDE2MjU3",
      "avatar_url": "https://avatars.githubusercontent.com/u/87016257?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/s-oshitade",
      "html_url": "https://github.com/s-oshitade",
      "followers_url": "https://api.github.com/users/s-oshitade/followers",
      "following_url": "https://api.github.com/users/s-oshitade/following{/other_user}",
      "gists_url": "https://api.github.com/users/s-oshitade/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/s-oshitade/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/s-oshitade/subscriptions",
      "organizations_url": "https://api.github.com/users/s-oshitade/orgs",
      "repos_url": "https://api.github.com/users/s-oshitade/repos",
      "events_url": "https://api.github.com/users/s-oshitade/events{/privacy}",
      "received_events_url": "https://api.github.com/users/s-oshitade/received_events",
      "type": "User",
      "site_admin": false
      },
      {
      "login": "minasoha",
      "id": 87757115,
      "node_id": "MDQ6VXNlcjg3NzU3MTE1",
      "avatar_url": "https://avatars.githubusercontent.com/u/87757115?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/minasoha",
      "html_url": "https://github.com/minasoha",
      "followers_url": "https://api.github.com/users/minasoha/followers",
      "following_url": "https://api.github.com/users/minasoha/following{/other_user}",
      "gists_url": "https://api.github.com/users/minasoha/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/minasoha/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/minasoha/subscriptions",
      "organizations_url": "https://api.github.com/users/minasoha/orgs",
      "repos_url": "https://api.github.com/users/minasoha/repos",
      "events_url": "https://api.github.com/users/minasoha/events{/privacy}",
      "received_events_url": "https://api.github.com/users/minasoha/received_events",
      "type": "User",
      "site_admin": false
      },
      {
      "login": "mark-escosura",
      "id": 88951042,
      "node_id": "MDQ6VXNlcjg4OTUxMDQy",
      "avatar_url": "https://avatars.githubusercontent.com/u/88951042?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/mark-escosura",
      "html_url": "https://github.com/mark-escosura",
      "followers_url": "https://api.github.com/users/mark-escosura/followers",
      "following_url": "https://api.github.com/users/mark-escosura/following{/other_user}",
      "gists_url": "https://api.github.com/users/mark-escosura/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/mark-escosura/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/mark-escosura/subscriptions",
      "organizations_url": "https://api.github.com/users/mark-escosura/orgs",
      "repos_url": "https://api.github.com/users/mark-escosura/repos",
      "events_url": "https://api.github.com/users/mark-escosura/events{/privacy}",
      "received_events_url": "https://api.github.com/users/mark-escosura/received_events",
      "type": "User",
      "site_admin": false
      },
      {
      "login": "roxanneweber",
      "id": 89050736,
      "node_id": "MDQ6VXNlcjg5MDUwNzM2",
      "avatar_url": "https://avatars.githubusercontent.com/u/89050736?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/roxanneweber",
      "html_url": "https://github.com/roxanneweber",
      "followers_url": "https://api.github.com/users/roxanneweber/followers",
      "following_url": "https://api.github.com/users/roxanneweber/following{/other_user}",
      "gists_url": "https://api.github.com/users/roxanneweber/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/roxanneweber/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/roxanneweber/subscriptions",
      "organizations_url": "https://api.github.com/users/roxanneweber/orgs",
      "repos_url": "https://api.github.com/users/roxanneweber/repos",
      "events_url": "https://api.github.com/users/roxanneweber/events{/privacy}",
      "received_events_url": "https://api.github.com/users/roxanneweber/received_events",
      "type": "User",
      "site_admin": false
      },
      {
      "login": "Darla-Young",
      "id": 89855627,
      "node_id": "MDQ6VXNlcjg5ODU1NjI3",
      "avatar_url": "https://avatars.githubusercontent.com/u/89855627?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Darla-Young",
      "html_url": "https://github.com/Darla-Young",
      "followers_url": "https://api.github.com/users/Darla-Young/followers",
      "following_url": "https://api.github.com/users/Darla-Young/following{/other_user}",
      "gists_url": "https://api.github.com/users/Darla-Young/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Darla-Young/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Darla-Young/subscriptions",
      "organizations_url": "https://api.github.com/users/Darla-Young/orgs",
      "repos_url": "https://api.github.com/users/Darla-Young/repos",
      "events_url": "https://api.github.com/users/Darla-Young/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Darla-Young/received_events",
      "type": "User",
      "site_admin": false
      },
      {
      "login": "Chriskelley55",
      "id": 89886337,
      "node_id": "MDQ6VXNlcjg5ODg2MzM3",
      "avatar_url": "https://avatars.githubusercontent.com/u/89886337?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Chriskelley55",
      "html_url": "https://github.com/Chriskelley55",
      "followers_url": "https://api.github.com/users/Chriskelley55/followers",
      "following_url": "https://api.github.com/users/Chriskelley55/following{/other_user}",
      "gists_url": "https://api.github.com/users/Chriskelley55/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Chriskelley55/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Chriskelley55/subscriptions",
      "organizations_url": "https://api.github.com/users/Chriskelley55/orgs",
      "repos_url": "https://api.github.com/users/Chriskelley55/repos",
      "events_url": "https://api.github.com/users/Chriskelley55/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Chriskelley55/received_events",
      "type": "User",
      "site_admin": false
      },
      {
      "login": "altoramclean",
      "id": 90203300,
      "node_id": "MDQ6VXNlcjkwMjAzMzAw",
      "avatar_url": "https://avatars.githubusercontent.com/u/90203300?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/altoramclean",
      "html_url": "https://github.com/altoramclean",
      "followers_url": "https://api.github.com/users/altoramclean/followers",
      "following_url": "https://api.github.com/users/altoramclean/following{/other_user}",
      "gists_url": "https://api.github.com/users/altoramclean/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/altoramclean/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/altoramclean/subscriptions",
      "organizations_url": "https://api.github.com/users/altoramclean/orgs",
      "repos_url": "https://api.github.com/users/altoramclean/repos",
      "events_url": "https://api.github.com/users/altoramclean/events{/privacy}",
      "received_events_url": "https://api.github.com/users/altoramclean/received_events",
      "type": "User",
      "site_admin": false
      },
      {
      "login": "mnenslei",
      "id": 90472304,
      "node_id": "MDQ6VXNlcjkwNDcyMzA0",
      "avatar_url": "https://avatars.githubusercontent.com/u/90472304?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/mnenslei",
      "html_url": "https://github.com/mnenslei",
      "followers_url": "https://api.github.com/users/mnenslei/followers",
      "following_url": "https://api.github.com/users/mnenslei/following{/other_user}",
      "gists_url": "https://api.github.com/users/mnenslei/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/mnenslei/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/mnenslei/subscriptions",
      "organizations_url": "https://api.github.com/users/mnenslei/orgs",
      "repos_url": "https://api.github.com/users/mnenslei/repos",
      "events_url": "https://api.github.com/users/mnenslei/events{/privacy}",
      "received_events_url": "https://api.github.com/users/mnenslei/received_events",
      "type": "User",
      "site_admin": false
      },
      {
      "login": "wb1110",
      "id": 90784675,
      "node_id": "MDQ6VXNlcjkwNzg0Njc1",
      "avatar_url": "https://avatars.githubusercontent.com/u/90784675?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/wb1110",
      "html_url": "https://github.com/wb1110",
      "followers_url": "https://api.github.com/users/wb1110/followers",
      "following_url": "https://api.github.com/users/wb1110/following{/other_user}",
      "gists_url": "https://api.github.com/users/wb1110/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/wb1110/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/wb1110/subscriptions",
      "organizations_url": "https://api.github.com/users/wb1110/orgs",
      "repos_url": "https://api.github.com/users/wb1110/repos",
      "events_url": "https://api.github.com/users/wb1110/events{/privacy}",
      "received_events_url": "https://api.github.com/users/wb1110/received_events",
      "type": "User",
      "site_admin": false
      },
      {
      "login": "SafiaOmar",
      "id": 90978408,
      "node_id": "MDQ6VXNlcjkwOTc4NDA4",
      "avatar_url": "https://avatars.githubusercontent.com/u/90978408?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/SafiaOmar",
      "html_url": "https://github.com/SafiaOmar",
      "followers_url": "https://api.github.com/users/SafiaOmar/followers",
      "following_url": "https://api.github.com/users/SafiaOmar/following{/other_user}",
      "gists_url": "https://api.github.com/users/SafiaOmar/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/SafiaOmar/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/SafiaOmar/subscriptions",
      "organizations_url": "https://api.github.com/users/SafiaOmar/orgs",
      "repos_url": "https://api.github.com/users/SafiaOmar/repos",
      "events_url": "https://api.github.com/users/SafiaOmar/events{/privacy}",
      "received_events_url": "https://api.github.com/users/SafiaOmar/received_events",
      "type": "User",
      "site_admin": false
      },
      {
      "login": "mattv731",
      "id": 91152722,
      "node_id": "MDQ6VXNlcjkxMTUyNzIy",
      "avatar_url": "https://avatars.githubusercontent.com/u/91152722?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/mattv731",
      "html_url": "https://github.com/mattv731",
      "followers_url": "https://api.github.com/users/mattv731/followers",
      "following_url": "https://api.github.com/users/mattv731/following{/other_user}",
      "gists_url": "https://api.github.com/users/mattv731/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/mattv731/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/mattv731/subscriptions",
      "organizations_url": "https://api.github.com/users/mattv731/orgs",
      "repos_url": "https://api.github.com/users/mattv731/repos",
      "events_url": "https://api.github.com/users/mattv731/events{/privacy}",
      "received_events_url": "https://api.github.com/users/mattv731/received_events",
      "type": "User",
      "site_admin": false
      }
      ],
      username: 'topstock',
      input: ''

  }

  handleChanges = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    })
    console.log( this.state.input);
  }

  getProfileData = () => {
    return axios.get(`https://api.github.com/users/${this.state.username}`)
        .then( res => { 
          return res.data
        })
        .catch(err => console.error(err))
  };


  

  getFollowersData = () => {
    return axios.get(`https://api.github.com/users/${this.state.username}/followers`)
    .then(res => {
      return(res.data);
    })
    .catch(err => console.error(err))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      username: this.state.input
    })
  }
  
  componentDidUpdate() {
    this.setState({
      ...this.state,
      followersData: getFollowersData()
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      followersData: getFollowersData()
  }

getDogImages(this.state.breed)


  render() {
   
      // axios.get(`https://api.github.com/users/${this.state.username}/`)
      //   .then(res => console.log(res.data))
      //   // .then( res => { this.setState({ ...this.state, profileData: res.data}) })
      //   .catch( err => console.log(err))

      // axios.get(`https://api.github.com/users/${this.state.username}/`)
      //   .then(res => console.log(res.data))
      //   // .then( res => { this.setState({ ...this.state, profileData: res.data}) })
      //   .catch( err => console.log(err))

    return(<div>
      Github Card
      <h1>GITHUB INFO</h1>
      <form>
        <input value={`${this.state.input}`} onChange={this.handleChanges} />
        <button onSubmit={this.handleSubmit} placeholder='GitHub Handle'>Search</button>
      </form>
      <User 
        userImgURL={this.state.profileData.avatar_url} 
        userLogin={this.state.profileData.login}
        userName={this.state.profileData.name}
        userFollowers={this.state.profileData.followers} 
        userRepos={this.state.profileData.public_repos}
      />
      <div className='followersList'>
        <h3>FOLLOWERS</h3>
          <FollowerList 
          followersData={this.state.followersData.map( follower => {
            return {
              followerLogin: follower.login,
              followerImgUrl: follower.avatar_url,
              followerId: follower.id
            }
          })}
          /> 
      </div>
    </div>);
  }
}

export default App;
