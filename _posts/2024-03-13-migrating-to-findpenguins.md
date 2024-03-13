---
layout: post
title: "Migrating from Polarsteps to FindPenguins"
date: 2024-03-13
categories: [Overland]
tags: [Overland, Technology]
image: penguins-header.png
---

## Our Thoughts on Digital Safety
Ensuring your safety on the road should always be a top priority, yet many individuals fail to recognize the profound impact of their digital footprints on their physical well-being.
Recently, our awareness was heightened when discussing the safety implications of [Polarsteps](www.polarsteps.com) within a Facebook group boasting over 70,000 members.
Astonishingly, numerous members shared their current public Polarsteps trackers with the group, unwittingly exposing their exact locations to this vast audience.
The thought of 70,000 strangers having access to such personal information is a safety nightmare.
While it's true that a significant portion may remain indifferent, it only takes one individual with malicious intent to turn the situation dire.

Consider this unsettling reality: anyone with internet access, whether an acquaintance or not, possesses detailed knowledge of your whereabouts.
They can track your movements, know when you depart from your vehicle, pinpoint your overnight stays, and even discover if you're venturing into remote areas.
Reflect on the countless encounters with dubious characters online – now, envision them having access to your precise location.
As your online following expands, fueled by each additional Instagram follower, the risk of encountering an unwelcome presence at your doorstep grows exponentially.

**Such a compromise of one’s personal safety is unequivocally unacceptable.**

## Why a tracker is good
The concept of a travel tracker resonates deeply with us.
The ability to encapsulate our 3+ year journey on a single screen serves as a vivid reminder of the vast distances we've conquered on our journey through the Americas.
Sharing our approximate location with friends and family enables them to virtually accompany us on our adventures.
Furthermore, the tracker serves a social purpose by enabling us to share our approximate location with fellow travelers we've encountered along the way.
This opens up the possibility of reunions in the same region, creating opportunities to reconnect with like-minded individuals enhances the richness of our travel experiences.

In essence, the travel tracker serves not only as a geographical record but also as a visual diary, offering a captivating glimpse into our past adventures for future recollection.
The sentimental value attached to revisiting these moments is immeasurable, adding an extra layer of significance to our ongoing journey.

## Find Penguins and their Digital Safety

Polarsteps only has two to four safety modes:

    1. Your tracker is public for anyone to see
    2. Your tracker is friends only and you add people you have personally met and trust
    3. Your tracker is friends only and you add the absolute minimum of friends and family
    4. Your tracker is private and nobody can see it

&nbsp;

In our case, we opted for the fourth option, ensuring our tracker remains entirely private.
While option three, limiting visibility to friends and family, might be considered somewhat acceptable, we chose to prioritize our privacy and safety.
The desire to connect with fellow travelers we've met is strong, but the lack of familiarity with their safety practices and digital hygiene compelled us to exercise caution.

In contrast, [Find Penguins](https://findpenguins.com/) distinguishes itself by offering over 50 privacy settings, providing users with a comprehensive array of options to tailor the visibility of their travel tracker.
Among these features, the ability to selectively exclude certain followers, create a *close friends list*, and implement a time delay for location updates stands out as particularly noteworthy.
These nuanced privacy controls empower users to customize their sharing preferences in a defined manner that Polarsteps lacks, ensuring a more secure and personalized experience for users concerned about safeguarding their location data.

Depending on your comfort level and the degree of risk you're willing to assume with your digital footprint, Find Penguins allows you to finely tune exactly who has access to your travel information and when.
Our specific settings reflect a conscious effort to balance sharing our journey with privacy concerns.

In our case, we've set the delay for followers who may not be close friends or family to _7 days_.
This provides a sufficient buffer, ensuring that our exact location is not immediately accessible, minimizing any potential security risks.
This way, by the time our location becomes visible, we have moved on, eliminating any immediate threat associated with real-time tracking.

For our close friends and family, however, we grant them immediate and precise access to our location, excluding them from any delay.
This ensures that those closest to us can stay connected with our travels in real-time without compromising security.

It's crucial to underscore the importance of practicing safe digital hygiene, especially when sharing personal information online.
As the digital landscape evolves, safeguarding your privacy is increasingly essential.
If you haven't already, adopting secure digital practices should be an immediate priority to protect yourself and your data in the online realm.

| Trip Settings | Time Delayed Settings |
|:-------------:|:---------------------:|
|   ![Alt][1]   |       ![Alt][2]       |

## Migration Overview

### What about an in-progress trip?

Our safety concerns do not apply to trips that have concluded, and we are theoretically comfortable sharing our maps with acquaintances.
Consequently, there was no urgency to transfer those journeys from one tracker to another.
However, our perspective shifted after 15 months into our 36 month trip.
We realized that Polarsteps' safety settings were insufficient for our evolving needs.
We set our Polarsteps tracker to private, aiming to withhold our current, immediate location from public view.
Seeking a more secure platform while retaining the original trip data became a priority for us.

Attempting to migrate an ongoing trip with a substantial *7404 waypoints* from Polarsteps to Find Penguins would be an impossible task
Faced with these options, we explored various avenues to transfer our ongoing journey from Polarsteps to Find Penguins, without creating an imperfect or imprecise map.

### What can be migrated easily and what can’t

If your Polarsteps tracker has been active throughout your entire journey, migrating the GPS coordinates of your entire trip is feasible.
The process involves automatically adding step coordinates and converting them into footprints, while the task of manually adding photos remains.
For users who have utilized Polarsteps primarily as a diary, this migration process may span a few nights to complete, depending on the volume of entries.

In our case, where we predominantly leveraged Polarsteps for its mapping functionality and the ability to share our location with friends and family.
As such, the need to manually add a few steps along the way was not a significant impediment to migrating our data.
While this approach may entail some effort, the overall convenience of having a more secure and feature-rich tracking platform, such as Find Penguins, justified the transition for us.

## The Migration Process

### Exporting Data from Polarsteps

It's essential to undertake this entire process on your laptop rather than your phone, as a larger screen proves to be a lifesaver.

Since the implementation of GDPR, companies are obliged to furnish users with a means to access all their data.
However, the exported data might not always be in an optimal format or highly useful.
The key, nonetheless, lies in the ability to move your data from one platform (Polarsteps), to another (Find Penguins).
To initiate this transition, we'll first extract data from Polarsteps and then undergo a few additional steps to prepare it for seamless integration.

For best results, follow the [Polarsteps documentation](https://support.polarsteps.com/article/124-how-can-i-export-a-copy-of-my-data).

At the time of writing, you would go to _Profile > Account Settings > Download My Data_ on the Polarsteps website.

![Alt][3]{: width="50%"}

It's worth noting that you won't be directly downloading the data from the website.
Instead, Polarsteps will send you an email containing a download link, akin to Google's Takeout data download service.

Click the link and download a file called _“user_data.zip”_.
You will need this file for the next step.

### Importing into Find Penguins
Admittedly, there exists a more challenging path that involves delving into code and navigating through a multitude of button presses.
Regrettably, we initially took this route due to unawareness that Find Penguins provides a single-click solution.
Having discovered this more user-friendly alternative, we recommend opting for the simplicity of Find Penguins' simple one-click solution.
This spares users the complexities associated with manual coding.

Go to [https://findpenguins.com/import/s/polarsteps](https://findpenguins.com/import/s/polarsteps) and upload your _“users_data.zip”_ file.


Step 1) Upload your Polarsteps data

![Alt][4]

Step 2) Select your trips

![Alt][5]

Step 3) Profit!

![Alt][6]

### Fixing it all up

While the migration tool in Find Penguins offers a convenient one-click solution, it has a few limitations.
Notably, it does not automatically set the trip headline photo, a minor issue that can be easily rectified.
Additionally, the tool does not import any photos associated with the steps you uploaded in Polarsteps.
Depending on the extent of your Polarsteps usage, re-uploading these photos might require some time and effort.

For users like us who have sections of road that were not actively tracked in Polarsteps, resulting in straight lines that don't align with any roads, Find Penguins impressively addresses this challenge.
The platform can identify the best possible route and generate a visually appealing, meandering line that accurately reflects the journey.
It's worth noting that the editing of routes is only functional on the mobile app, necessitating a switch from desktop to mobile for this particular task.
Despite these minor considerations, the overall benefits of the migration process, especially the enhanced route representation, make the transition worthwhile.

Here are the steps for the process:

1) Find a route that lacks proper routing

![Alt][7]{: width="50%"}

2) Click on “auto route”

![Alt][8]{: width="50%"}

3) Profit!

![Alt][9]{: width="50%"}

Once your corrections are made you will have a more visually-pleasing and accurate map.

## Find Penguins Hiccups

Unlike some trackers that work effortlessly out of the box, Find Penguins necessitates certain permission adjustments that may not be immediately apparent upon installation.

On iOS, the app predominantly functions in "low accuracy" mode, although occasional instances of achieving "high accuracy" are possible.
This discrepancy might differ from the expectations of users familiar with other tracking apps.

On Android devices, an additional hurdle arises as the tracker is susceptible to being terminated by the operating system, leading to the automatic shutdown of the tracker.
This can result in a frustrating user experience, especially for those unaware of the necessary steps to fix this issue.

Fortunately, this is a known issue and Find Penguins has a useful [FAQ with the fix](https://support.findpenguins.com/hc/en-us/articles/10057810848796-The-travel-tracker-terminates-after-a-certain-time?source=answerbot&auth_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X2lkIjo5MDcwMTcyLCJ1c2VyX2lkIjoxMjg3MTI0OTE4NTY5MiwidGlja2V0X2lkIjoyNjY4OCwiZGVmbGVjdGlvbl9pZCI6MTI4ODE5MjY3NTgxNzIsImFydGljbGVzIjpbMTAwNTc4MTA4NDg3OTYsMzYwMDE0NzEzMzczLDM2MDAxNDcxMzQ3M10sInRva2VuIjpudWxsLCJleHAiOjE3MTE4OTUyMTZ9.hPtjaIQM-EQTRoafGLU7csE6IAO9T0To0XeMD2IrWcM).

## Closing Remarks

It is our sincere hope that internet users become mindful of their digital safety, extending the same level of caution to various aspects of their online presence as they would to protecting sensitive information such as social security or credit card numbers.
While the importance of safeguarding this information is widely recognized, one's digital footprint should also be treated with equal consideration.

In our experience, Find Penguins has emerged as an excellent travel tracker, not only for its proficiency in correcting missing routes, but also for its impressive array of finely-tunable safety settings.
This platform has proven instrumental in striking a balance between sharing our journey and maintaining our privacy and for these reasons we highly recommend it to our fellow travelers.

[1]: /images/blog/findpenguins/trip-settings.jpg "Trip settings"
[2]: /images/blog/findpenguins/time-delayed%20sharing.jpg "Time delayed sharing"
[3]: /images/blog/findpenguins/export-polarsteps.png
[4]: /images/blog/findpenguins/upload-archive.png "Upload Archive"
[5]: /images/blog/findpenguins/import-dialog.png "Select your trip"
[6]: /images/blog/findpenguins/import-success.png "Import Success"
[7]: /images/blog/findpenguins/beginning.jpg "Begin Correction"
[8]: /images/blog/findpenguins/apply.jpg "Click apply"
[9]: /images/blog/findpenguins/profit.jpg "Corrected route"