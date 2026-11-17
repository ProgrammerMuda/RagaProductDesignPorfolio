/* Content copied from the Figma "Portfolio" file. Screen arrays:
   phone: [label, image]
   web:   [label, image, url, offsetY?, imageHeight?]  (offset for long scroll shots) */
window.PROJECTS = [
{
  slug: "proapps", tags: ["Mobile App","Website"], subtitle: "Property Management Application", stats: [90,1], name: "PROAPPS", year: "2025", role: "Product Designer",
  card: { chip: "Dashboard · Mobile App", icon: "buildings", title: "Smart building management for property", desc: "Building management system for multi-role users — tenants, facilities and operations in one place." },
  chip: "Case study · Mobile App",
  sub: "Property Management Application — a redesign that brings rentals, billing, tickets and inspections into one mobile app.",
  meta: [["Project","Proapps Property App"],["Role","Product Designer"],["Service","Redesign Product"],["Device","Mobile Phone"],["Year","2025"]],
  overviewLabel: "Issue & goals",
  overview: ["Issue and project goals", "Currently, the development of property or building management in some places is still considered very far from technology so that property management is still slow and very complicated, therefore Proapps is designed to simplify and help in the field of property management. With features that have been adapted to the needs of property management, ProApps ensures that property management will be much easier and faster"],
  market: {
    points: ["Property owners prefer applications that offer efficient rental management and detailed financial reports.","Property managers want applications that simplify the property maintenance process and seamless integration with financial management systems."],
    stats: [["75%","of users want more efficient rental management features"],["60%","of users expect better integration with payment systems"]],
    users: ["Property tenants","Property managers","Building management"], age: "25 – 45 years"
  },
  research: {
    sub: "We compare and analyze similar services with proapps based on three criteria based on target needs to understand the service and identify its advantages and disadvantages. Based on this, we conducted interviews with property tenants and property management to identify any existing inconveniences.",
    competitors: [["Homelivin","Good UI and userfriendly","The information on the billing is not completely detailed"],["Nimbus9","Very complete features","Tenants cannot see details of water and electricity records"]],
    interviews: [["“I want proapps to help me when I want to pay my monthly property bills”","Lucia Pangarep","Tenant Property"],["“Nowadays, building management still uses paper and I hope we can paperless”","Wisnu Sajajang","Building Management"]]
  },
  problems: {
    sub: "After conversing with our intended users, we identified prevalent pain points. But the highlighted ones are the most common ones faced by users. These insights shape our solutions to enhance user experience.",
    items: [
      ["Information Limitations","Property owners and managers may have difficulty accessing up-to-date information about their properties, such as rental status, rental payments, or repair requests.",["Build a dashboard that provides a summary of important information about all managed properties, including rental status, payments, and repairs.","Provides real-time notifications about changes in rental status or issues that require the attention of the property owner or manager.","Integrate property management systems with mobile applications so property owners and managers can access information anytime and anywhere."]],
      ["Payment Management","Payment management processes such as processing rental payments and tracking arrears can be complicated and time consuming",["Integrate an online payment system that allows tenants to make rent payments electronically.","Implement automation features to send payment reminders and process payments periodically.","Provides easy-to-access and detailed payment reports to make it easy to monitor rent payments and track arrears."]],
      ["Maintenance Management","Maintaining a property efficiently requires regular monitoring and prompt handling of maintenance issues as they arise. but currently handling is still often slow",["Implement a property maintenance management system that allows managers to track repair requests, manage routine maintenance schedules, and coordinate repair work with tenants and vendors.","Provide a platform where tenants can report maintenance issues and upload photos or videos to make it easier to identify and address issues.","Integrate a property maintenance management system with calendars and reminders to ensure timely follow-up on routine repair and maintenance requests."]]
    ]
  },
  timeline: {
    sub: "The development of a mobile application consists of many stages. First we conduct analytics, then UX, then we create prototypes, draw designs and test",
    phases: ["Analysis & Discover","Define","Ideate","Design"],
    steps: [["Briefing","1 day",0,1.1],["Research","10 days",1.1,10.8],["User Persona","2 days",11.8,2.2],["User Journey","2 days",14,2.2],["App Structure","2 days",16.1,2.2],["Wireframe","6 days",18.3,6.5],["Design System","10 days",24.7,10.8],["Hi-Fi Design","2 months",35.5,64.5]]
  },
  vi: { font: "Montserrat", colors: [["Teal500","#14B8A6"],["Cyan800","#09769A"],["White","#FFFFFF"],["Slate100","#F1F5F9"],["Slate500","#64748B"],["Slate800","#1E293B"]],
    logo: ["Building + “O”","The central element of this logo is a building and the letter \"O\" symbolizes building management and the letter \"O\" can be used as a connecting word in the logo text.","90ef28c54f22"] },
  ks: { title: "Inside the app", sub: "Eleven key flows from the revamped app — tenant side and building management side, and what each page is for.",
    flows: [
      ["Tenant · Management","Login & OTP","Users sign in with their account and confirm it with a one-time password (OTP), so every role and every site is accessed securely.","phone",[["Splash screen","3aec0e1fde15"],["Login","55b62a7c7bcf"],["OTP verification","56840cd62c13"]]],
      ["Tenant · Management","Home per role","One app, a different home for each role. Tenants see invoices, requests, utility and units at a glance; engineering and security see the work that matters to them.","phone",[["Tenant","2b1fe6bfeff1"],["Engineering","d662be572fb3"],["Security","437ff8cf8679"]]],
      ["Tenant","Invoice & Payment","Every bill in one place — filter by status, open the details and pay through a virtual account with step-by-step instructions.","phone",[["All billing","a937f1d04211"],["Unpaid bill","13de79149637"],["BCA VA payment","6fa655042836"]]],
      ["Tenant","Work Request","Tenants report a problem in their unit with a title, location, photos and notes, then follow it until the work is done and confirm the result.","phone",[["Request form","75901c9ec1ca"],["In progress","f0c1f4862ab5"],["Complete","a86304fac3aa"]]],
      ["Management","Work Order","Engineering receives the request as a work order, schedules it, updates its progress and uploads photos of the result for the tenant to confirm.","phone",[["Work order list","589e154c797b"],["Work order detail","7b083e135939"],["Upload work result","900421a9df04"]]],
      ["Management","Inspection","Daily inspection schedules for every asset. Staff scan the asset QR code, fill in the checklist and flag minor or major damage — no more paper forms.","phone",[["Schedule","91afcf778940"],["Scan QR code","d15c3092d186"],["Damage report","4bb4fee70650"]]],
      ["Tenant → Security","GIGO — Goods In Goods Out","Tenants register goods going in or out of the building. Security checks every item at the gate and reports any mismatch before the request is closed.","phone",[["Add goods","c11f4ab0e011"],["Security check","700311e4b982"],["Report mismatch","09db04566b97"]]],
      ["Tenant","Door Lock Access","Tenants open building doors with a QR code that refreshes on a timer, and can switch between entrances right from the app.","phone",[["QR code access","28f01d9d8da0"],["Change entrance","4015f0046d91"],["Code expired","00ce624785e6"]]],
      ["Security → Tenant","Tracking Package","Security logs every incoming package with a photo; the tenant gets notified and picks it up by showing a QR code at the lobby.","phone",[["Add package (security)","5f09f56be8c5"],["Waiting pickup","a84278bc9e29"],["Scan QR to pick up","9a5e17d2ca3e"]]],
      ["Tenant","Reservation","Tenants book shared facilities such as the tennis court by picking a room and an available time slot, then show a QR code on the day.","phone",[["Choose schedule","784464d8d2e0"],["Booked","39b1abbf72d5"],["Reservation QR","11c9c3ca345a"]]],
      ["Management","Attendance","Building staff check in and out with a swipe and a selfie, and can see their shift, working hours and attendance history.","phone",[["Today attendance","4dd3b65b2569"],["Review photo","d330fa18eb19"],["Check in recorded","9a67410a3509"]]]
    ] },
  behance: ["40+ more design","See every screen on Behance","View full case on Behance"]
},
{
  slug: "geoproperty", tags: ["Website"], subtitle: "Final Project 2026", stats: [28,4], name: "GeoProperty", year: "2026", role: "UI/UX Designer",
  card: { chip: "Web App · AI · GIS", icon: "globe-hemisphere-east", title: "AI-powered property marketing on the map", desc: "Blending GIS, panoramic views and AI search so buyers can explore listings spatially." },
  chip: "Case study · Website",
  sub: "A property website for buying or renting — search with filters or with AI, read every listing on the map, and walk through homes in 360°.",
  meta: [["Project","GeoProperty Website"],["Role","UI/UX Designer"],["Type","Final project"],["Platform","Website"],["Year","2026"]],
  overview: ["Searching for a home, made easier to understand", "Looking for a property means weighing many things — where you spend your days, how much space you need, and your plans ahead. GeoProperty is a platform to buy or rent property that starts from those needs: tell it what you are looking for in plain words with AI search, or narrow down with filters, then compare every option on the map."],
  ia: { title: "Six areas, one clear map", sub: "The sitemap was set before any screen was drawn — six areas that cover finding, judging and listing a property.",
    areas: [
      ["house","Home",["Manual search","Search with AI","Property gallery","How it works","For sale · For rent","Client stories","FAQ"]],
      ["magnifying-glass","Search results",["Card view","List view","Map view","Map legend"]],
      ["buildings","Property detail",["Photo gallery","Video tour","360° tour","Nearby places","Mortgage simulation","Rent calculator","Contact seller"]],
      ["plus-circle","List a property",["1 · Address & area","2 · General info","3 · Detail info","4 · Images & panorama","5 · Contact","Review & publish"]],
      ["chart-bar","My listings",["Listings by status","Drafts","View listing","Listing analytics","Edit · Republish","Mark sold · Deactivate","Share · Delete"]],
      ["user","Account & about",["Sign in · Email & OTP","Sign in with Google","Sign up","My profile","About GeoProperty"]]
    ] },
  process: { title: "From sitemap to usability test", sub: "Each step lives as its own page in the Figma file, so the work can be traced from structure to a tested prototype.",
    steps: [["Sitemap","Map every page and how users move between them."],["Lo-fi wireframe","Lay out each page in grey boxes before any visual style."],["Design system","Build colour, type and components so every page stays consistent."],["Hi-fi design","Apply the system to every page, state and overlay."],["Prototype","Wire the hi-fi screens into clickable flows."],["Usability test","Invite people to try the prototype, finish short tasks and rate it."]],
    images: [["Lo-fi wireframe","32b1e8e1b126"],["Hi-fi design","e9c16fc66e4a"]] },
  vi: { font: "Manrope", colors: [["Primary 700","#2C5282"],["Primary","#2B6CB0"],["Primary 500","#3182CE"],["Foreground","#171923"],["Muted","#EDF2F7"],["Accent","#EBF8FF"]] },
  ks: { title: "Inside the app", sub: "Nine flows that carry the product — how people find a property, judge it, and list their own.", shot: [637,453],
    flows: [
      ["Visitor","Home","The first screen asks one question — buy or rent — and puts filters and AI search right in the hero, followed by featured listings, how it works, client stories and FAQ.", "web3", [["Top · hero, about & how it works","e9c16fc66e4a","geoproperty.id",0,1022,"993eedb92114"],["Middle · listings for sale & rent, client stories","e9c16fc66e4a","geoproperty.id",-680,1022,"993eedb92114"],["Bottom · FAQ, consultation & footer","e9c16fc66e4a","geoproperty.id",-1360,1022,"993eedb92114"]]],
      ["Visitor","Sign in & OTP","Users sign in with their email and confirm it with a one-time code, or continue with Google.","web",[["Sign in","9ea3b3b18e02","geoproperty.id"],["OTP verification","40d29071844b","geoproperty.id"]]],
      ["Buyer · Renter","Search with AI","Instead of filling every filter, users describe what they need in plain words — location, budget, style — and get listings that match.","web",[["Describe your needs","48278ab0b44f","geoproperty.id"],["AI results","41a8a3495d92","geoproperty.id"]]],
      ["Buyer · Renter","Map search","Results switch between card, list and map. On the map every plot is coloured by property type, with a legend that explains the colours and price labels.","web",[["Results on the map","fd068dd9854b","geoproperty.id"],["Map legend","72599cc539bd","geoproperty.id"]]],
      ["Buyer · Renter","Property detail","Price, specs and facilities up top; below, nearby places on a map grouped by schools, transport, hospitals, shopping and more.","web",[["Overview","dae54b77ed59","geoproperty.id"],["Nearby places","12602dfca27d","geoproperty.id"]]],
      ["Buyer · Renter","360° tour & video","Buyers walk through each room in a 360° panorama, with hotspots to move between spaces, or watch a video tour before booking a visit.","web",[["360° tour","49f1a4d9ca2c","geoproperty.id"],["Video tour","2bdad6d997f2","geoproperty.id"]]],
      ["Buyer · Renter","Mortgage & rent calculator","A mortgage simulation estimates the monthly payment from down payment and tenor; rentals get a calculator for the total rent cost.","web",[["Mortgage simulation","8c2c7e788deb","geoproperty.id"],["Rent calculator","ae42e21f6804","geoproperty.id"]]],
      ["Seller","List a property","Sellers list a property in five guided steps — address on the map, general info, details, images & panorama, contact — then review before publishing.","web",[["Step 1 · Address & area","f82482fb18c3","geoproperty.id"],["Review & publish","dc4322dbdb06","geoproperty.id"]]],
      ["Seller","My listings & analytics","Sellers manage every listing by status and read its analytics: visits over time, traffic sources, contact clicks and the content buyers open most.","web",[["My listings","2d50d5da8f85","geoproperty.id"],["Listing analytics","ecdf1c11c13e","geoproperty.id"]]]
    ] }
},
{
  slug: "dli", tags: ["Mobile App","Website"], subtitle: "Booking Ticket", stats: [21,0], name: "DLI OTA", year: "2024", role: "UI/UX Designer",
  card: { chip: "Web App · Travel", icon: "airplane-tilt", title: "One booking flow for flights, hotels and trains", desc: "An online travel agency experience that keeps three booking types in a single, consistent flow." },
  chip: "Case study · Mobile app & website",
  sub: "An online travel assistant for companies and travellers — book flights, hotels and trains in one app, pay through a virtual account, and keep every e-ticket in one place.",
  meta: [["Project","DLI Online Travel Assistance"],["Role","UI/UX Designer"],["Type","Travel booking"],["Platform","Mobile app · Website"],["Year","2024"]],
  overview: ["One assistant for every business trip", "A business trip usually means booking a flight, a hotel and sometimes a train — often on different apps, with payments and tickets scattered around. DLI-OTA brings them together: one search for flights, hotels and trains, one cart for every booking, payment through a virtual account or company credit limit, and orders and e-tickets kept in one history. Companies register once, then their team books under the same account."],
  ia: { title: "Six areas, from sign-up to e-ticket", sub: "The mobile app is grouped by what a traveller does next — get in, search, compare, book, pay and keep track of the trip.",
    areas: [
      ["user","Account",["Splash · Onboarding","Account type","Company sign-up","Personal sign-up","Sign in","Forgot · Reset password"]],
      ["compass","Explore",["Flight · Hotel · Train","One way · Round trip","Select dates","Passengers & class","Search"]],
      ["magnifying-glass","Results",["Flight tickets","Hotels","Trains","Sort","Filter by transit, class, time, airline"]],
      ["airplane-tilt","Booking",["Ticket details","Customer details","Passenger details","Booking timer","Booking successful"]],
      ["shopping-cart","Cart & payment",["Cart by category","Payment summary","Payment method","Virtual account","Awaiting payment"]],
      ["receipt","Orders & profile",["Order history","Order details · E-ticket","Booking history","Notifications","Profile · Balance","Edit profile"]]
    ] },
  vi: { font: "Roboto", colors: [["Primary 9","#0540AE"],["Primary 6","#0069FF"],["Primary 5","#0F8DFF"],["Gray 9","#212529"],["Gray 1","#F1F3F5"],["Primary 0","#EBF8FF"]] },
  ks: { title: "Inside the app", sub: "Seven flows from the mobile app — from first launch to the e-ticket — plus the landing page that brings companies in.", shot: [416,436],
    flows: [
      ["Visitor","Onboarding","A short onboarding introduces DLI-OTA as one assistant for flights, hotels and trains before the user starts or signs up.","phone",[["Splash screen","dd5ed698b8ce"],["Online travel assistance","1cc6c0a46cdd"],["Fly anywhere","e62764252440"]]],
      ["Company","Sign up & sign in","Users pick a company or personal account first, so a business can register its company and admin details before its team signs in.","phone",[["Account type","de8d014aefe7"],["Company registration","dfc339ca62ad"],["Sign in","de48042d20d8"]]],
      ["Traveller","Search a trip","One search card covers flights, hotels and trains — choose one way or round trip, set dates on a two-month calendar, then compare tickets by time and price.","phone",[["Explore","ce7f66b6f547"],["Select dates","d2ea1bf2fdb3"],["Flight results","fdad7afad54b"]]],
      ["Traveller","Filter & hotels","Filters narrow tickets by transit, class, departure and arrival time and airline; hotel results lead with photos, rating and the price per night.","phone",[["Filter","ac8027e89dc4"],["Hotel results","38929f959f18"]]],
      ["Traveller","Book a ticket","The ticket sheet shows schedule, baggage and aircraft before booking; passenger details can match the booker in one tap, all under a booking timer.","phone",[["Ticket details","ed08f5010456"],["Passenger details","fa6814dd66ae"],["Booking successful","15cbec81dc16"]]],
      ["Traveller","Cart & payment","Bookings wait in one cart grouped by flight, hotel and train; payment shows the full price breakdown and a virtual account with a countdown.","phone",[["Cart","b43743debebc"],["Payment","24d6a29f9491"],["Virtual account","a8f0ae465f19"]]],
      ["Traveller","Orders & profile","Order history separates paid and awaiting payment; each order opens its e-ticket, and the profile keeps credit limit, deposit and transactions together.","phone",[["Order history","3191e5cc5aeb"],["Order details","1fd9355d0ced"],["Profile","851d34265334"]]],
      ["Company","Landing page","The landing page puts the flight, hotel and train search in the hero, then explains DLI-OTA, why companies choose it, the clients who joined and a closing call to action.","web3",[["Top · hero search & about","f867c2c9809f","DLI-OTA",0,1308],["Middle · why DLI-OTA & clients","f867c2c9809f","DLI-OTA",-436,1308],["Bottom · call to action & footer","f867c2c9809f","DLI-OTA",-872,1308]]]
    ] }
},
{
  slug: "kjm-mobile", tags: ["Mobile App"], subtitle: "Security Management App", stats: null, name: "KJM Mobile", year: "2025", role: "UI/UX Designer",
  chip: "Case study · Mobile app",
  sub: "A security workforce app for Kresna Jagannatha Mandiri — guards clock in with a selfie, request leave and overtime, and report incidents, while supervisors approve requests and score KPIs in the same app.",
  meta: [["Project","KJM Security Mobile"],["Role","UI/UX Designer"],["Type","Security management"],["Platform","Mobile app"],["Year","2025"]],
  overview: ["One app for the guard on site and the supervisor behind them", "Running a security team means keeping track of who is on duty, who is on leave, who worked overtime and what happened on each site — work that often runs on manual processes. KJM Mobile moves it into one app with two roles. Guards (Satpam) clock in and out with a selfie checked against the site radius, request leave and overtime, and report incidents straight from the field. Field coordinators, PICs and managers see today's attendance at a glance, approve requests in one tap, log site visits and score each guard's KPI."],
  ia: { title: "Six areas, two roles", sub: "The app is split by role. Guards get attendance, leave, overtime and incident reports; coordinators, PICs and managers get approvals, site visits, KPI evaluation and the team's attendance log.",
    areas: [
      ["user","Account",["All roles: splash","Sign in","Wrong password · Unregistered email","Connection lost","Profile · Privacy policy","Change password · Log out"]],
      ["house","Home",["Attendance summary","Online · Offline mode","Recent activity","Notifications","Outside-radius alert"]],
      ["fingerprint","Attendance",["Clock in (Naik jaga)","Selfie · Check photo","Outside the site radius","Clock out (Turun jaga)","Attendance log"]],
      ["calendar-check","Leave & overtime",["Leave: general · sick","Upload proof","Overtime: regular · backup","Approval status","Search · Filter"]],
      ["siren","Reports",["Incident report","Site visit report","Category · Severity","Pending · In progress · Done","Photos as evidence"]],
      ["seal-check","Supervisor tools",["Approve leave & overtime","KPI evaluation","Soft skill · Hard skill","Evaluation period","Team attendance log"]]
    ] },
  vi: { font: "Figtree", colors: [["Indigo A700","#304FFE"],["Orange 600","#FB8C00"],["Orange 900","#E65100"],["Blue Grey 900","#263238"],["Blue Grey 300","#90A4AE"],["Blue Grey 50","#ECEFF1"]] },
  ks: { title: "Inside the app", sub: "Eight flows across both roles — from signing in and clocking on to approving a request and scoring a guard's KPI.",
    flows: [
      ["All roles","Sign in","Guards and supervisors sign in with their email and password, with a clear message when the password is wrong or the email isn't registered.","phone",[["Splash screen","594e1ec88494"],["Sign in","acd3ff344140"],["Wrong email or password","ae371a2f1fe8"]]],
      ["Guard","Home","The guard's home shows today's attendance — clock-in time, leave and overtime — with recent activity below, and says so when the phone is offline.","phone",[["On duty","951ce198b6a6"],["Shift finished","b08af8e94415"],["Offline mode","fd427263ee3a"]]],
      ["Guard","Clock in","Clocking in takes a selfie on site. The guard checks the photo, then the app confirms the shift has started.","phone",[["Take a photo","da1b7bd6d788"],["Check photo","4e16cc8eb6a5"],["Clocked in","aec843bd0e5e"]]],
      ["Guard","Leave request","A leave request takes a type, dates, proof and a reason, then shows where it is in the approval.","phone",[["Leave form","c1d042227a2a"],["Request submitted","036d75aad4dc"]]],
      ["Guard","Overtime","Overtime is requested per shift and site, and each request can be followed until it's approved.","phone",[["Overtime list","824331fd5401"],["New overtime","b6b791f7eab1"],["Approved","00fbe958d662"]]],
      ["Guard","Incident report","Incidents are reported from the field with category, location and severity, then tracked until they're handled.","phone",[["Reports","c352338b6628"],["New report","30df414fefb6"],["In progress","be2bdcbb902c"]]],
      ["Supervisor","Home & approval","Coordinators, PICs and managers start with today's operational status and pending requests, and approve or reject leave and overtime in one tap.","phone",[["Supervisor home","02d554396fd8"],["Leave requests","a2c6d7cbbfe1"],["Review a request","00613985bffe"]]],
      ["Supervisor","KPI & site visits","Supervisors score each guard's soft and hard skills for the period, and log site visits with supporting photos.","phone",[["KPI evaluation","6ae0af4d98db"],["Soft skill score","eb9ba11feeab"],["Site visit report","1f541f82f5a9"]]]
    ] }
},
{
  slug: "kjm-dashboard", tags: ["Website"], subtitle: "Security Operations Dashboard", stats: null, name: "KJM Dashboard", year: "2026", role: "UI/UX Designer",
  chip: "Case study · Web dashboard",
  sub: "A web dashboard for the KJM Security back office — operations managers, HR, head office and system admins monitor every site, manage personnel and schedules, approve leave and review reports in one place.",
  meta: [["Project","KJM Security Dashboard"],["Role","UI/UX Designer"],["Type","Security management"],["Platform","Web dashboard"],["Year","2026"]],
  overview: ["One place for the office behind every site", "KJM Dashboard is the office side of KJM Security. The mobile app is used by guards and supervisors in the field; the dashboard is where the back office works. It brings together a map of every site with its open incidents, the personnel list and duty schedule, attendance recaps per site, leave and overtime approvals, incident and visit reports, and KPI scores. Four roles — Operations Manager, HR, Head Office and System Admin — sign in to the same dashboard, and each gets the modules and access its job needs."],
  ia: { title: "Six areas, four roles", sub: "The main menu holds the daily work — site monitoring, personnel, leave, reports and KPI. Settings holds the set-up: users, sites, broadcast and the profile. What each role can open or edit depends on its access.",
    areas: [
      ["map-pin","Monitoring site",["Site map across Java","Incident markers by severity","Site detail · Active incidents","Search · Filter by province"]],
      ["users","Personnel",["Personnel list","Add personnel in four steps","Duty schedule · Import","Attendance recap per site"]],
      ["calendar-check","Leave & overtime",["Overtime · Backup","Leave · Sick leave","Proof document","Approve · Reject · Export"]],
      ["siren","Reports",["Incident reports","Visit reports","Severity · Status","Export reports"]],
      ["chart-bar","KPI",["Average score","Grade distribution","KPI detail","Soft skill · Hard skill"]],
      ["gear","Settings",["User management","Site management","Broadcast","Employee data · Profile"]]
    ] },
  vi: { font: "Figtree", colors: [["Indigo 6","#4C6EF5"],["Teal 6","#12B886"],["Orange 6","#FD7E14"],["Red 6","#FA5252"],["Gray 9","#212529"],["Gray 3","#DEE2E6"]] },
  ks: { title: "Inside the dashboard", sub: "Eight flows from the dashboard — from signing in and watching the site map to approving leave and setting up users and sites.", shot: [629,447], url: "KJM Dashboard",
    flows: [
      ["All roles","Sign in","Office staff sign in with email and password. A wrong combination gets a short message at the corner, and the form keeps what was typed.","web",[["Sign in","e046d5a1b0a8"],["Wrong email or password","f6ef43b0b88b"]]],
      ["Main menu","Monitoring site","The monitoring map shows every site across Java, marked by the risk level of its incidents. Opening a site lists its active incidents in a side panel.","web",[["Site map with incident markers","2ef7c93d6123"],["Site detail","a1da2c1e9519"]]],
      ["Main menu","Personnel","The personnel list shows each guard’s ID number, position and site. Adding someone takes four steps: basic info, residency data, contact and bank account.","web",[["Personnel list","d337c3ed3b40"],["Add personnel · step 1 of 4","74d379a647bb"]]],
      ["Main menu","Schedule & attendance","Duty schedules are set on a monthly calendar, one shift per day for each person, or imported in bulk. The recap groups attendance by site, with present, absent and leave counts and an attendance rate.","web",[["Duty schedule · calendar view","b8dcc0345208"],["Attendance recap per site","14dd6f3f9c31"]]],
      ["Main menu","Leave approval","Leave and sick requests arrive with dates, reason and status. The detail panel shows the proof document, and the request is approved or rejected right there.","web",[["Leave & sick requests","b4c335e15afb"],["Request detail","423332481f7f"]]],
      ["Main menu","Reports","Incident reports are counted by status and listed with category, site, severity and status. Visit reports list each site visit with its date and who made it.","web",[["Incident reports","bb49bd5c2e94"],["Visit reports","3d84420dd3a5"]]],
      ["Main menu","KPI","The KPI page shows the average score and how grades are spread, then each guard’s evaluation. The detail breaks the total into soft and hard skills.","web",[["KPI overview","f5fd1a6a4689"],["KPI detail","38f0505b75e4"]]],
      ["Settings","Users & sites","Admins manage who can sign in by category, role and site, and set up each site with its PIC, personnel count and address.","web",[["User management","2fede1215425"],["Site management","814a1cc39c97"]]]
    ] }
},
{
  slug: "spotlight", tags: ["Mobile App"], subtitle: "BRI Bandung", stats: [58,3], name: "SPOTLIGHT", year: "2023", role: "Product Designer",
  card: { chip: "Mobile App · GIS", icon: "map-pin", title: "A GIS survey app for BRI field teams", desc: "Capturing location, photos and survey data for micro & small enterprise marketing in West Java." },
  chip: "Case study · Mobile app & web dashboard",
  sub: "A field survey app for BRI relationship managers to map micro and small business prospects — with a web dashboard where branch and regional offices review, approve and filter every point on the map.",
  meta: [["Project","Spotlight — BRI Bandung"],["Role","UI/UX Designer"],["Type","Banking · Field survey"],["Platform","Mobile app & web"],["Year","2023"]],
  overview: ["From a street survey to a branch-wide map", "Spotlight helps BRI relationship managers (RM) find and record potential micro and small business customers. In the field, an RM signs in with their PN code, takes a photo of the business — the app saves its latitude and longitude — and fills in the prospect's details, business sector, estimated income and referral targets. Surveys go to BRI's server only when the RM sends them, and the coordinates can't be edited afterwards, so the data can't be manipulated. On the web dashboard, branch (Kanca) and regional (Kanwil) offices see every point on the map coloured by customer status, filter by work area, unit, turnover and potential, approve new surveys and export the data to Excel."],
  ia: { title: "Six areas, two apps", sub: "The mobile app is for the RM in the field: sign in, take a survey, send it and see where they have been. The web dashboard is for the offices: the map, approvals, filters and user management.",
    areas: [
      ["user","Account",["Sign in with PN code","Wrong PN or password","Account info","Change password · Log out"]],
      ["house","Home",["All surveys","Status labels","Empty state","Choose data to send","Delete data"]],
      ["camera","Input POI",["Take a photo","Auto latitude & longitude","Prospect & referral details","Preview · Edit data"]],
      ["map-pin","Multiple plot",["Visited points on a map","Coloured by status","Location detail","Download approved data"]],
      ["chart-bar","Web dashboard",["Map of points","Four summary panels","Point colour guide","Filter · Export to Excel"]],
      ["seal-check","Approval & users",["Approve surveys","User list","Add · Edit user","Activate · Deactivate"]]
    ] },
  vi: { font: "Plus Jakarta Sans", colors: [["Primary","#00529C"],["Secondary","#FC7411"],["Success","#43AD47"],["Warning","#FFC107"],["Danger","#DE3E44"],["Neutral 10","#060607"]] },
  ks: { title: "Inside both apps", sub: "Nine flows across both apps — five on the RM’s phone in the field, four on the office dashboard.", shot: [629,447], url: "Spotlight",
    flows: [
      ["RM · Mobile","Sign in","RMs sign in with the PN code and password they were given, so every survey is tied to one account. A wrong PN code or password gets a clear error.","phone",[["Splash screen","444cc252f5b5"],["Sign in","990fef0c1f8d"],["Wrong PN code or password","09c8668e1922"]]],
      ["RM · Mobile","Home & send","Home lists every survey with its status — not sent, updated or sent. The RM picks which surveys go to BRI’s server, or deletes the ones that aren’t needed.","phone",[["All surveys","1a7f95a87587"],["No surveys yet","4530221f0059"],["Choose data to send","0ee9d8bd0532"]]],
      ["RM · Mobile","Input POI","A survey starts with a photo of the business, and the app saves its latitude and longitude. The RM then fills in the prospect’s details and checks the location.","phone",[["Take a photo","63da3400c0cd"],["Prospect details","443e94f2b7ad"],["Survey detail","5b477ad03d79"]]],
      ["RM · Mobile","Multiple plot","Multiple plot shows every point the RM has visited, coloured by status once approved. Approved data can be downloaded to avoid surveying the same place twice.","phone",[["Visited points","3bf2c5b073ee"],["Coloured by status","d2be37cd24b4"]]],
      ["RM · Mobile","Edit & profile","Survey data can be edited after input, but the coordinates stay locked. The profile shows the RM’s PN details and a change-password flow.","phone",[["Edit data","daf52a622daa"],["Account info","51bf24cd2a39"],["Change password","a9785524759e"]]],
      ["Office · Web","Dashboard map","The dashboard puts every point on the map, coloured by customer status, with four panels summarising acquisitions, pending approvals, potential and turnover.","web",[["Map with summary panels","eecb1d3a3c32"],["Point colour guide","007a888ca8c3"]]],
      ["Office · Web","Filter","Points can be filtered by work area, unit, turnover, potential and input date, and the summary panels follow the filter.","web",[["Filter panel","6000f9a433fb"],["Filtered result","529504afc2e1"]]],
      ["Office · Web","Approval","New surveys show up grey until they’re checked. Branch and regional offices open a point, review the photo and details, then approve it.","web",[["Waiting for approval","f32bb5349f3e"],["Approve a survey","cd9421e68aa2"]]],
      ["Office · Web","Users","Admins manage users by PN code, name, position and unit, and can activate or deactivate several at once.","web",[["User list","896769f3e70c"],["Add user","ef8e2123dfff"]]]
    ] }
},
{
  slug: "platformation", tags: ["Website"], subtitle: "Sports Analytics Platform", stats: null, name: "Platformation", year: "2025", role: "UI/UX Designer",
  chip: "Case study · Web platform",
  sub: "A sports analytics platform for Revolve AI — it reads match video, audio and social media posts, finds every sponsor logo and player, and turns that exposure into a value each brand can see.",
  meta: [["Project","Platformation — Revolve AI"],["Role","UI/UX Designer"],["Type","Sports analytics"],["Platform","Web platform"],["Year","2025"]],
  overview: ["Turning match footage into sponsor value", "Platformation was built for Revolve AI, a client from Pakistan and the UK that I worked with through Upwork. Sponsors pay to have their logo on shirts, boards and broadcasts, but rarely see how much of that exposure actually reaches people. Platformation reads match video, audio and social media posts, detects each brand and player, and turns the result into exposure time, position on screen and a sponsorship value per brand. Admins keep the reference data the detection relies on — players, brands and users — while analysts group their work into projects and events and read the brand insight for each one."],
  ia: { title: "Six areas, two roles", sub: "The main menu holds the analysis work — content collections, the EPG crawler and projects with their brand insight. The admin panel holds the reference data detection depends on: users, players and brands, plus detection and payment settings. Users see their own dashboard; admins see both.",
    areas: [
      ["squares-four","Dashboard",["Content collections","Upload video · Social links","Search social content","Filter by brand, date, platform"]],
      ["television","EPG crawler",["Fixtures & results by day","Live · Upcoming · Finished","Channel, region, sport filters","Audience & CPT per match"]],
      ["folders","Projects",["Projects per sponsor campaign","Events by sport & league","Brand insight per event","Video · Audio · Social · Total"]],
      ["users-three","Players",["Player list & search","Add player with face photos","Edit · Delete"]],
      ["flag","Brands",["Brand list","Logo variations","Slogan & slogan photos","Edit · Delete"]],
      ["gear","Users & settings",["Approve new sign-ups","Update role · Password","Detection setting","Payment"]]
    ] },
  vi: { font: "Inter", colors: [["Teal 600","#17837D"],["Sand 400","#C8A380"],["Navy 950","#19144A"]] },
  ks: { title: "Inside the platform", sub: "Nine flows across the analyst dashboard and the admin panel — from signing in and analysing posts to reading what each sponsor brand is worth.", shot: [629,419], url: "Platformation",
    flows: [
      ["All roles","Sign in","Analysts sign in with email and password, or continue with a Google account. The right side introduces the product with a short set of slides.","web",[["Sign in","46aa26f27eb4"],["Continue with Google","3473311084d9"]]],
      ["User","Social media collection","Inside a collection, the analyst pastes a post or video link and starts the analysis. Each analysed post shows its reach, the top brand, exposure time, the surface it appeared on and how many brands and players were found.","web",[["Paste a social media link","76d8451ffeaf"],["Analysed content","6dc9289fca4d"]]],
      ["Admin","Search content","Admins search public posts by platform, page, keyword and date, pick the ones worth analysing and send them in one go.","web",[["Search filters","ff11e31667c4"],["Results ready to analyse","8311e80717c7"]]],
      ["Admin","Brand insight","Every event opens a brand insight. Video analytics show where and how long each logo appears on screen; the total tab adds video, audio and social media into one sponsorship value.","web",[["Video analytics","d48c6e2b54fa"],["Total sponsorship value","80286f4d21be"]]],
      ["Admin","EPG crawler","The crawler lists fixtures and results by day — channel, local and UTC time, audience, country and CPT — and can be narrowed to live, upcoming or finished matches.","web",[["Fixtures & results","3a7b7a4fdd36"],["Live matches","3fe174c7dbfc"]]],
      ["Admin","Projects & events","Work is grouped into projects per sponsor campaign. Inside a project, each event is added by sport, league or competition, match and brand.","web",[["Project list","333410578436"],["Add an event","347300183036"]]],
      ["Admin","Player management","Players are added with a name, sport type and three to four face photos, which the AI uses to recognise them in footage.","web",[["Search players","ac0e15612f04"],["Add player with face photos","c7570ea7443d"]]],
      ["Admin","Brand management","Each brand keeps its logo variations, slogan and slogan photos, so detection can find the brand however it appears.","web",[["Brand list","a53385ac06d1"],["Logo variations & slogan photos","8a134e255401"]]],
      ["Admin","User management","Admins approve or reject new sign-ups, switch roles between admin and user, and set passwords.","web",[["User list","a9f82d41bf48"],["Update role","394c58ac19e7"]]]
    ] }
},
{
  slug: "plotial", tags: ["Mobile App"], subtitle: "Field Survey Platform", stats: null, name: "Plotial Survey", year: "2024", role: "UI/UX Designer",
  chip: "Case study · Mobile app & web",
  sub: "A configurable field survey platform — teams build their survey on the web, surveyors fill it in the field with a photo and location, and managers watch every point land on a map.",
  meta: [["Project","Plotial Survey"],["Role","UI/UX Designer"],["Type","Field survey"],["Platform","Mobile app & web"],["Year","2024"]],
  overview: ["One survey, built once, filled anywhere", "Plotial Survey lets an organisation run field surveys without building a new app each time. On the web, a manager creates a project from a blank form or a ready template, then sets up the form fields, the legend that marks each point on the map and the analytics shown on the dashboard. In the field, surveyors sign in, take a photo, fill the form and send their data when they are ready. Back on the web, every submission shows up as a pin on the map, where it can be filtered, approved and exported to Excel."],
  ia: { title: "Six areas, two apps", sub: "The mobile app is for surveyors: home, adding data, sending it, the survey list and map, and statistics. The web dashboard is for managers: the survey map with analytics, projects and their setup, approval and users.",
    areas: [
      ["house","Home",["Today's statistics","Today's history","Send · Add · Delete","Notifications"]],
      ["camera","Add data",["Take a photo","Fill the survey form","Dates, dropdowns, checkboxes","Edit before sending"]],
      ["map-pin","Survey list & map",["List with search & filter","Map of survey points","Point information","Sent · Not sent"]],
      ["chart-bar","Statistics & profile",["Daily · Weekly · Monthly","Bar and line charts","Profile · Password","Help & support"]],
      ["folders","Projects",["Blank project or template","Setup form","Setup legend","Setup analytics"]],
      ["squares-four","Dashboard & users",["Survey map & analytics","Filter · Search · Excel","Approval","Users & teams"]]
    ] },
  vi: { font: "Lato", colors: [["Primary 500","#0EA5E9"],["Primary 700","#0369A1"],["Primary 950","#082F49"],["Green 500","#22C55E"],["Orange 500","#F97316"],["Slate 500","#64748B"]] },
  ks: { title: "Inside both apps", sub: "Ten flows across both apps — five on the surveyor's phone, five on the manager's web dashboard, from signing in to building a new survey.", shot: [629,358], url: "Plotial Survey",
    flows: [
      ["Surveyor · Mobile","Sign in","After a short onboarding, surveyors sign in with email and password, then enter an API key to connect the app to their organisation.","phone",[["Onboarding","2af4ffbd7d35"],["Sign in","a9cccdf6c6b7"],["API key","78fb304c7f29"]]],
      ["Surveyor · Mobile","Home & statistics","Home shows today's sent, unsent, edited and deleted data, the day's history and shortcuts to send, add or delete. Statistics show the same numbers by day, week or month.","phone",[["Home","6d5cd8939e24"],["Weekly statistics","b7ee5ab54306"],["Profile","0829c056f67c"]]],
      ["Surveyor · Mobile","Add data","Adding data starts with a photo of the place, then the survey form the project set up on the web — short answers, dropdowns, dates and more.","phone",[["Take a photo","692a7d5996bc"],["Photo added","3633cab799d1"],["Fill the form","9a4f473fbf4f"]]],
      ["Surveyor · Mobile","Send data","Saved data waits on the phone until the surveyor picks what to send. A confirmation shows what goes out, and a success message closes the loop.","phone",[["Choose data","4935075fca23"],["Confirm sending","f1c549b132ad"],["Data sent","054f69a70c73"]]],
      ["Surveyor · Mobile","Survey list & map","Every survey a surveyor made can be found as a list or on a map. Tapping a point shows its photo and details.","phone",[["Survey list","5c378c1dcc57"],["Survey map","504025b3bf9c"],["Point information","f9175d0ec849"]]],
      ["Manager · Web","Dashboard map","Managers pick a project and see every survey as a pin, marked by its legend. The analytics panel shows totals and the legend split by day, week or month.","web",[["Survey map","a0058c6dcf30"],["Analytics panel","e8911f1730ca"]]],
      ["Manager · Web","Survey list & detail","The same surveys as a list, with photo, date and legend status. Opening a point shows everything the surveyor filled in.","web",[["Survey list","69cc9a7e4295"],["Survey detail","e4f5d73a85df"]]],
      ["Manager · Web","New project","A project starts from a blank form or a bank or UMKM template. The form builder adds fields and sections, with a live preview beside it.","web",[["Choose a template","5cdd73a00e28"],["Setup form","7635dbd99d04"]]],
      ["Manager · Web","Legend & analytics","The legend decides how points are marked on the map. Analytics are built the same way — pick a form field, a formula and a chart, and watch the preview.","web",[["Setup legend","2711dac3bd44"],["Setup analytics","0ad5ce10c0c2"]]],
      ["Manager · Web","Users","Managers add users with their team and role — manager or surveyor — and keep their status up to date from one list.","web",[["User list","4bcfae2df9f9"],["Add user","11a5fd904940"]]]
    ] }
},
{
  slug: "bumi-bersih", tags: ["Mobile App"], subtitle: "Community Environment App", stats: null, name: "Bumi Bersih", year: "2023", role: "UI/UX Designer",
  chip: "Case study · Mobile app",
  sub: "A community app that turns cleaning up into missions — collect waste, join clean-ups with local communities, earn points and trade them for goods, vouchers and phone credit.",
  meta: [["Project","Bumi Bersih"],["Role","UI/UX Designer"],["Type","Environment & community"],["Platform","Mobile app"],["Year","2023"]],
  overview: ["Small missions that add up to a cleaner neighbourhood", "Bumi Bersih gives people a reason to keep looking after the places around them. Missions come in two kinds: individual missions, where you drop sorted waste at a collection point and scan the weighing result, and community missions, where you join a clean-up at a beach or river with a local group. Every mission earns points that count towards a leaderboard and can be exchanged for goods, food vouchers, plants or phone credit. Short videos and articles explain why it matters, and community chats keep groups organised between events."],
  ia: { title: "Six areas around one loop", sub: "Everything leads back to the same loop — pick a mission, finish it, claim the points, spend them — with communities and learning content around it.",
    areas: [
      ["user","Account",["Splash · Walkthrough","Phone number sign-in","OTP verification","Profile settings","Change phone number","Customer service chat"]],
      ["house","Home",["Points & rank","Mission shortcuts","Recent activity","Point vouchers","Latest content","Notifications"]],
      ["recycle","Missions",["Individual: collect waste","Community: clean-ups","Detail · Directions","Scan weighing result","Claim points","Mission history"]],
      ["users-three","Communities",["Community list","Community profile","Members · Media","Group chat","Join a community"]],
      ["gift","Rewards",["Leaderboard","Exchange points","Goods · Food · Plants · Credit","Redemption status","Exchange history"]],
      ["book-open-text","Learn",["Videos","Articles","Search","Video player"]]
    ] },
  vi: { font: "Inter", colors: [["Primary 500","#F55050"],["Primary 600","#E12121"],["Primary 50","#FEF2F2"],["Neutral 950","#292929"],["Neutral 500","#7C7C7C"],["Green 500","#22C55E"]] },
  ks: { title: "Inside the app", sub: "Seven flows, from signing in to spending points — with the mission loop in the middle.",
    flows: [
      ["Mobile app","Sign in","Sign-in is phone-number based: enter a number, get a four-digit code and you are in. No password to remember.","phone",[["Splash screen","d310eeaaea54"],["Phone number","43861a2fa5b9"],["Verification code","63dc8607cd35"]]],
      ["Mobile app","Home","Home leads with total points and rank, then shortcuts to both mission types, recent activity and vouchers. The leaderboard and notifications are one tap away.","phone",[["Home","9a87732d4ffd"],["Leaderboard","36659afa0648"],["Notifications","fe7e6ff8b4d8"]]],
      ["Mobile app","Individual mission","Collecting waste: pick a waste type, drop it at a collection point, scan the QR on the weighing result and the points are credited.","phone",[["Collect waste","78cc3e2cdccc"],["Scan weighing result","bce0468c3a52"],["Points claimed","8d6232005b6a"]]],
      ["Mobile app","Community mission","Clean-ups are hosted by communities. Each event shows the place, date and bonus points, with directions to the meeting point.","phone",[["Community missions","bf91b7add398"],["Mission detail","466c21490cb5"],["Directions","b94f98ff60ab"]]],
      ["Mobile app","Communities","Each community has a profile with members and shared media, plus a group chat to coordinate between events.","phone",[["Communities","496f7a1954f4"],["Community profile","65c3c6a9866a"],["Group chat","e46528053758"]]],
      ["Mobile app","Exchange points","Points are spent by category — goods, food, plants and phone credit — and every redemption shows its delivery status.","phone",[["Exchange points","c8dd8696f4ec"],["Item detail","acec3e5c9892"],["Redemption status","444fc4e8010f"]]],
      ["Mobile app","Learn & profile","Short videos and articles explain the why behind each mission. The profile keeps account settings and a direct line to support.","phone",[["Videos","a237b8e67c2d"],["Video player","9f2d8975a772"],["Profile","1df2cd8b0773"]]]
    ] }
}
];
