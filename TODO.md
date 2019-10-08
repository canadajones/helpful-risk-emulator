**H**elpful <br>
**R**isk <br>
**E**mulator

# TODO LIST:

#### Basic responses up and running
- [ ] !ping
- [ ] !write
- [ ] !read
- [ ] !WHERE'STHEAIRSUPPORT
- [ ] !quack

#### Basic map for testing
- [ ] Small, needs sea and ports
- [ ] Basic order parser
- [ ] Basic units and movement
- [ ] Attacking / defending mechanics

#### Complete unit mobility
- [ ] Porting units and such
- [ ] Transport by sea

#### Rank management
- [ ] Separate from Discord, but will create Discord roles and assign them if the option is given
- [ ] Decides who can enter orders or execute commands
- [ ] Removes all data on players who leave
- [ ] !join
- [ ] !leave
- [ ] !kick
- [ ] !ban
- [ ] !setcountry

#### Bigger map
- [ ] The big map provided by the Kaiser

#### Extra commands and data that can be edited by WMs
- [ ] !game [options/player/map]
- [ ] !game options roll [value for survive] [value for success] [value for fail] [max roll]
- [ ] !game map [name] [link] [add/remove]  //enters a link under a name, link is displayed when name is called
- [ ] !game player [id] [ban/kick/rank/forcecountry]
- [ ] !game player [id] rank [rank name]
- [ ] !game player [id] forcecountry [country name]
- [ ] !map [name]  //calls a map link by name
- [ ] !readgm (will find and set WMs based on rank name, rank name must be "World Master", will only work if no WMs are in the system)

---

Notes:

## COMBAT SYSTEM

#### Troop types

1. Commander

2. Soldier:
	
	a) Infantry: No bonus
	
	b) Cavalry: 2x speed
	
	c) Artillery: 1.5x per regiment offensive bonus against forts

#### Fort Mechanics

1. Players can build forts on provinces to raise defensive bonus

2. Fort bonuses:
	
	a) Level 1: 1,5x defensive bonus
	
	b) Level 2: 2,5x defensive bonus
	
	c) Level 3: 3,5x defensive bonus

```js
combat.unit.totaldef = unit.def * fort.def + unit.def * 1.5;
```

#### Battle mechanics with example

1. Instead of attacking or defending, the commander can retreat
2. Offensive and defensive bonuses are applied
3. Unit A attacks unit B
4. A die is thrown to add up to 20% or remove up to 20% attack strength
5. Another die is thrown to add up to 20% or remove up to 20% defense strength
6. Those two steps are done to unit A, then done again to unit B
7. If unit A's attack strength is higher than unit B's defense, unit B perishes
8. If unit B's attack strength is higher than A's defense, A also perishes
9. If unit A has both higher attack and defense strength, only B perishes
10. And vice versa
11. Routs happen now

#### Additional battle features

1. Better commanders have better AI
2. Units with no commander attack until they die, win or rout

**Note**: Fort defensive bonus caps out at 3,5x





