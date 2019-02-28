H elpful<br/>
R isk<br/>
E mulator

TODO LIST:

Basic responses up and running
- #ping
- #write
- #read
- #WHERE'STHEAIRSUPPORT
Basic map for testing
- Small, needs sea and ports
Basic order parser
Basic units and attacking / defending mechanics
Rank management
- Seperate from discord, but will create discord roles and assign them if the option is given
- Decides who can enter orders or execute commands
- Removes all data on players who leave
- #join
- #leave
- #kick
- #ban
- #setcountry
Complete unit mobility
- Porting units and such
Bigger map
- The big map provided by the Kaiser
Extra commands and data that can be edited by WMs
- #game [options/player/map]
  - #game options roll [value for survive] [value for success] [value for fail] [max roll]
  - #game map [name] [link] [add/remove] //enters a link under a name, link is displayed when name is called
  - #game player [id] [ban/kick/rank/forcecountry]
    - #game player [id] rank [rank name]
    - #game player [id] forcecountry [country name]
  - #map [name] //calls a map link by name
  - #readgm (will find and set WMs based on rank name, rank name must be "World Master", will only work if no WMs are in the system)
