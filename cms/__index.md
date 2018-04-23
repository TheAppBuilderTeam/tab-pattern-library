---
layout: default
page: cms
selected: cms
---

# Content Management System

This section houses various user interface design elements and defines how they behave, what they look like and in some cases how they are coded. It also documents how various elements behave in different context, use of language and common flow patterns through the apps.


<div><a id="#cms_type"></a></div>
## Type

The type throughout the content management system uses Google’s Lato font-family. Various font styles are used throughout the CMS to establish a sense of hierarchy in the content and controls.


<ul class="main__content__block styling__block padding__100"  markdown="0">
	<li class="type__block">
		<div class="paragraph--meta paragraph--meta--top">Page Title</div>
		<div class="text--pageTitlePrimary">The quick brown fox jumps over the lazy dog</div>
		<div class="paragraph--meta paragraph--meta--bottom">
			<span>Size: 27px</span>
			<span>Weight: Regular</span>
			<span>Letter-Spacing: -0.5px</span>
		</div>
	</li>
	<li class="type__block">
		<div class="paragraph--meta paragraph--meta--top">Secondary &amp; Modal Title</div>
		<div class="text--pageTitleSecondary">The quick brown fox jumps over the lazy dog</div>
		<div class="paragraph--meta paragraph--meta--bottom">
			<span>Size: 18px</span>
			<span>Weight: SemiBold</span>
			<span>Letter-Spacing: -0.5px</span>
		</div>
	</li>
	<li class="type__block">
		<div class="paragraph--meta paragraph--meta--top">Paragraph</div>
		<div class="text--pageParagraph">The quick brown fox jumps over the lazy dog</div>
		<div class="paragraph--meta paragraph--meta--bottom">
			<span>Size: 15px</span>
			<span>Weight: Regular</span>
			<span>Letter-Spacing: -0.3px</span>
		</div>
	</li>
	<li class="type__block">
		<div class="paragraph--meta paragraph--meta--top">Micro</div>
		<div class="text--pageMicro">The quick brown fox jumps over the lazy dog</div>
		<div class="paragraph--meta paragraph--meta--bottom">
			<span>Size: 11px</span>
			<span>Weight: Regular</span>
			<span>Letter-Spacing: 0</span>
		</div>
	</li>
	<li class="type__block">
		<div class="paragraph--meta paragraph--meta--top">Warning</div>
		<div class="text--pageParagraphWarning">The quick brown fox jumps over the lazy dog</div>
		<div class="paragraph--meta paragraph--meta--bottom">
			<span>Size: 15px</span>
			<span>Weight: Regular</span>
			<span>Letter-Spacing: -0.3px</span>
		</div>
	</li>
	<li class="type__block">
		<div class="paragraph--meta paragraph--meta--top">Link</div>
		<a href="#" class="text--link">Edit Permissions</a>
		<div class="paragraph--meta paragraph--meta--bottom">
			<span>Size: 15px</span>
			<span>Weight: Regular</span>
			<span>Letter-Spacing: 0</span>
		</div>
	</li>
	<li class="type__block">
		<div class="paragraph--meta paragraph--meta--top">Micro Link</div>
		<a href="#" class="text--link--micro">12 Groups</a>
		<div class="paragraph--meta paragraph--meta--bottom">
			<span>Size: 13px</span>
			<span>Weight: Regular</span>
			<span>Letter-Spacing: -0.3px</span>
		</div>
	</li>
</ul>



<div><a id="#cms_colours"></a></div>
## Colour Palette

The colours below are used throughout the CMS and each specifies the hexcode and LESS names for the colour.   

<ul class="main__content__block padding__30"  markdown="0">
	<h3 class="float__left width__100">Text Colours</h3>
	<li class="colour__block colour__block--one">
		<div class="colour__block__info">
			<p>$cmsGrey</p>
			<p>#6A6F75</p>
		</div>
	</li>
	<li class="colour__block colour__block--two">
		<div class="colour__block__info">
			<p>$cmsPlaceholder</p>
			<p>#6A6F75</p>
		</div>
	</li>
	<li class="colour__block colour__block--three">
		<div class="colour__block__info">
			<p>$cmsLink</p>
			<p>#0570B6</p>
		</div>
	</li>
	<li class="colour__block colour__block--four">
		<div class="colour__block__info">
			<p>$red</p>
			<p>#6A6F75</p>
		</div>
	</li>
</ul>

<ul class="main__content__block padding__30"  markdown="0">
	<h3 class="float__left width__100">Button Colours</h3>
	<li class="colour__block colour__block--five">
		<div class="colour__block__info">
			<p>$buttonPrimary</p>
			<p>#00B5EB</p>
		</div>
	</li>
	<li class="colour__block colour__block--six">
		<div class="colour__block__info">
			<p>$buttonSecondary</p>
			<p>#D2D9E1</p>
		</div>
	</li>
	<li class="colour__block colour__block--seven">
		<div class="colour__block__info">
			<p>$buttonSecondaryText</p>
			<p>#657D98</p>
		</div>
	</li>
</ul>

<ul class="main__content__block padding__100"  markdown="0">
	<h3 class="float__left width__100">Background Colours</h3>
	<li class="colour__block colour__block--eight">
		<div class="colour__block__info">
			<p>$tableRow</p>
			<p>#F7F7F7</p>
		</div>
	</li>
	<li class="colour__block colour__block--nine">
		<div class="colour__block__info">
			<p>$textHead</p>
			<p>#E7F2F9</p>
		</div>
	</li>
	<li class="colour__block colour__block--ten">
		<div class="colour__block__info">
			<p>$componentBorder</p>
			<p>#E1E1E1</p>
		</div>
	</li>
</ul>



<div><a id="#cms_buttons"></a></div>
## Buttons

We use buttons throughout the CMS for important actions such as "Save Changes" and "Search." Primary buttons are used for these postive actions, and secondary buttons are used for the neutral options. Mini versions of these buttons are used in search bars.

<div class="main__content__block padding__100"  markdown="0">
	<button class="button--primary">Primary Button</button>
	<button class="button--primary button--disabled">Disabled Button</button>
	<button class="button--secondary">Secondary Button</button>
	<br />
	<button class="button--primary button--mini">Mini Primary Button</button>
	<button class="button--secondary button--mini">Mini Secondary Button</button>
</div>


<div><a id="#cms_tags"></a></div>
## Tags

Tags are used to specify what groups users belong to. When an app editor defines the audience for a list or piece of content they choose the user groups for whom the content is for.

The groups appear as tags and can be removed from the audience by pressing the "x" on the tag to remove it. If a user group added to the audience but will not be able to access it as they cannot see the parent list/lists this tag will appear in red.  

<ul class="main__content__block padding__100"  markdown="0">
	<li class="tag">Group that can see this content<a href="#" class="remove"></a></li>
	<li class="tag">Another group name<a href="#" class="remove"></a></li>
	<li class="tag">Group<a href="#" class="remove"></a></li>
	<li class="tag tag--negative">Group with no way to access content<a href="#" class="remove remove--negative"></a></li>
</ul>

<div><a id="#cms_forms"></a></div>

## Form Elements

Some info on forms

<div class="main__content__block padding__100">

<div class="form-group ">
     <label for="FirstName">First Name</label>
     <input autocomplete="off" class="" id="FirstName" name="FirstName" placeholder="First Name" type="text" value="first"/>
</div>

<div class="form-group">
     <label for="LastName">Last Name</label>
     <input autocomplete="off" class="" id="LastName" name="LastName" placeholder="Last Name" type="text" value="last"/>
</div>

<div>

	<div class="form--dataFields">
		<h4 class="form--dataFieldsHeading">Form Data Fields</h4>
		<label>Username</label>
		user@emailaddress.com
	</div>

	<div class="form--dataFields">
		<h4 class="form--dataFieldsHeading">Form Data Fields</h4>
		<label>Password</label>
		<p class="form--dataFieldsReset">Reset Password</p>
	</div>

<div class="form--dataFieldsCheckbox">
	<h4 class="form--dataFieldsHeading">Checkbox</h4>
  <input type="checkbox" checked="checked">
	Can be access by all users in the organization.
</div>

</div>

<div class="form--dropdown">
	<h4 class="form--dataFieldsHeading">Dropdown</h4>
	<select>
		<option value="App Name">App Name</option>
	  <option value="Author">Author</option>
	  <option value="App Grid">App Grid</option>
	</select>
</div>

</div>

## Tables

Below are the styles used throughout the tables on the CMS.

<div class="main__content__block padding__100">
	<table class="table-allUsers">
		<tbody>
		<tr class="table-RowOne">
				<th>
					Username ▲
				</th>
				<th>
					First Name
				</th>
				<th>
					Last Name
				</th>
				<th>
					Job Role
				</th>
				<th>
				</th>
		</tr>
		<tr>
			<td class="table-columnOne">
				john.morisson@theappbuilder.com
			</td>
			<td>
				John
			</td>
			<td>
				Morisson
			</td>
			<td>
			  IT Manager
			</td>
			<td class="table-columnFive">
							<img class="table-RedRemove" src="{{ site.baseurl }}/assets/images/tableRedRemove.svg"/>
			</td>
		</tr>
		<tr>
			<td class="table-columnOne">
				peter.graham@theappbuilder.com
			</td>
			<td>
				Peter
			</td>
			<td>
				Graham
			</td>
			<td>
				Global Director
			</td>
			<td class="table-columnFive">
				<img class="table-RedRemove" src="{{ site.baseurl }}/assets/images/tableRedRemove.svg"/>
			</td>
		</tr>
		<tr>
			<td class="table-columnOne">
				alison.beattie@theappbuilder.com
			</td>
			<td>
				Alison
			</td>
			<td>
				Beattie
			</td>
			<td>
				Public Relations
			</td>
			<td class="table-columnFive">
				<img class="table-RedRemove" src="{{ site.baseurl }}/assets/images/tableRedRemove.svg"/>
			</td>
		</tr>
		<tr>
			<td class="table-columnOne">
				mark.mccaigue@theappbuilder.com
			</td>
			<td>
				Mark
			</td>
			<td>
				McCaigue
			</td>
			<td>
				HR Manager
			</td>
			<td class="table-columnFive">
				<img class="table-RedRemove" src="{{ site.baseurl }}/assets/images/tableRedRemove.svg"/>
			</td>
		</tr>
		<tr>
			<td class="table-columnOne">
				jake.curry@theappbuilder.com
			</td>
			<td>
				Jake
			</td>
			<td>
				Curry
			</td>
			<td>
				Managing Director
			</td>
			<td class="table-columnFive">
				<img class="table-RedRemove" src="{{ site.baseurl }}/assets/images/tableRedRemove.svg"/>
			</td>
		</tr>
		<tr>
			<td class="table-columnOne">
				melissa.keizer@theappbuilder.com
			</td>
			<td>
				Melissa
			</td>
			<td>
				Keizer
			</td>
			<td>
				Creative Director
			</td>
			<td class="table-columnFive">
				<img class="table-RedRemove" src="{{ site.baseurl }}/assets/images/tableRedRemove.svg"/>
			</td>
		</tr>
		</tbody>
</table>

</div>

## Search Users

Below are the styles used throughout the search fields across the cms.

<div class="main__content__block padding__100">
		<div class="searchUsers__block width__100">
			<form>
				<label class="searchUsers--label" for="search">Search</label>
				<input class="searchUsers--searchBox" name="Search" placeholder="Search by ID, name, job role, status" type="text">
				<button class="searchUsers--closeIcon" type="reset">X</button>
				<input class="searchUsers--submitButton" value="Search" type="submit">
				<input class="searchUsers--resetButton" value="Reset" type="button">
			</form>
		</div><!--end of searchUsers__block div-->
	</div><!--en of main__content__block div-->

<!--Search and Select Groups------------------------------------------------------------------------------------------------------------------------------------------------

### Search and Select groups

<div class="main__content__block padding__100">

<form class="searchSelectGroups--block">
  <input class="searchSelectGroups--input" type="text" placeholder="Search for Groups" name="search" onkeyup="this.setAttribute('value', this.value);" value="">
  <button class="searchSelectGroups--addButton" type="submit">Add</button>
</form>

</div>

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

## Iconography


Below are the typical icons used throughout the CMS to give clear visual direction to what the button or section is about.



<div class="main__content__block padding__100">

		<table class="iconography--block">
			<tr>
					<td>
						<img class="iconograhy--icons greenTick" src="../assets/images/greenTick.svg"/>
					</td>
					<td>
						tick in the checkbox
					</td>
					<td>
						<img class="iconograhy--icons" src="{{ site.baseurl }}/assets/images/tableRedRemove.svg"/>
					</td>
					<td>
						remove from table
					</td>
					<td>
						<img class="iconograhy--icons deleteTrashCan" src="../assets/images/deleteTrashCan.svg"/>
					</td>
					<td>
						delete
					</td>
			</tr>

<!--end of first table row-->

			<tr>
					<td>
						<img class="iconograhy--icons eyeIcon" src="../assets/images/eyeIcon.svg"/>
					</td>
					<td>
						group access
					</td>
					<td>
						<img class="iconograhy--icons userSearchClearIcon" src="../assets/images/userSearchClearIcon.svg"/>
					</td>
					<td>
						close modal
					</td>
					<td>
						<img class="iconograhy--icons clearSearch" src="../assets/images/clearSearch.svg"/>
					</td>
					<td>
						clear search
					</td>
			</tr>

<!--end of second table row-->

			<tr>
				<td>
					<img class="iconograhy--icons locked" src="../assets/images/locked.svg"/>
				</td>
				<td>
					user group locked
			  </td>
				<td>
					<img class="iconograhy--icons" src="../assets/images/unlocked.svg"/>
		  	</td>
			  <td>
					user group unlocked
				</td>
			  <td>
					<img class="iconograhy--icons warningIcon " src="../assets/images/warningIcon.svg"/>
				</td>
			  <td>
					error or warning
			  </td>
			</tr>

<!--end of third table row-->

			<tr>
				<td>
					<img class="iconograhy--icons remove-blue" src="../assets/images/remove-blue.svg"/>
				</td>
				<td>
					blue remove icon
				</td>
			</tr>

<!--end of fourth table row-->
		</table>

</div><!--end of iconography--block div-->



## Navigation

In page tabs

<div class="main__content__block padding__100">

	<div>
		<ul class="navigation__list">
			<li><a class="navigation__listItem" id="navigation__listItem--1" href="#navigation__listItem--1">Channel Overview</a></li>
			<li><a class="navigation__listItem" id="navigation__listItem--2" href="#navigation__listItem--2">User Groups</a></li>
			<li><a class="navigation__listItem" id="navigation__listItem--3" href="#navigation__listItem--3">Users</a></li>
			<li><a class="navigation__listItem" id="navigation__listItem--4" href="#navigation__listItem--4">User Profile</a></li>
			<li><a class="navigation__listItem" id="navigation__listItem--5" href="#navigation__listItem--5">Channels</a></li>
			<li><a class="navigation__listItem" id="navigation__listItem--6" href="#navigation__listItem--6">Admin Details</a></li>
		</ul>
	</div>

<h4>Sidebar</h4>



	<div class="sidebar__container">

		<ul class="navigation__sidebar--title">
		 	<li>TheAppBuilder</li>
		</ul>

		<ul class="navigation__sidebar">
			<a id="sidebar__listItem--1" href="#sidebar__listItem--1"><li>Users</li></a>
			<li><a id="sidebar__listItem--2" href="#sidebar__listItem--2">User Groups</a></li>
			<li><a id="sidebar__listItem--3" href="#sidebar__listItem--3">Builds</a></li>
			<li><a id="sidebar__listItem--4" href="#sidebar__listItem--4">Channels</a></li>
			<li><a id="sidebar__listItem--5" href="#sidebar__listItem--5">Branding</a></li>
		</ul>
	</div>


</div>
