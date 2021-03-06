
<form id="jt_search_form" action="javascript:clickedSearchButton()">
    <table>
        <tr>
            <td width='1050' align="right" valign="top">
                <a href="about.html">About</a>
            </td>
        </tr>
    </table>
    <div id="topSearchDisplay">
        <table id="searchDisplay">
            <tr>
                <td id="searchLocationLabel">Location</td>
                <td>&nbsp;&nbsp;&nbsp;</td>
                <td id="timeframeLabel">Time Frame</td>
            </tr>
            <tr>
                <td>
                    <input id="searchLocation" value='' type="text" placeholder='e.g. City, Intersection, Address'>
                </td>
                <td>&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select id='timeWindow' onChange='displayCustomRangeSection()'>
                        <option value="any" selected="selected">Any Time</option>
                        <option value="hour">Past Hour</option>
                        <option value="3hours">Past 3 Hours</option>
                        <option value="6hours">Past 6 Hours</option>
                        <option value="9hours">Past 9 Hours</option>
                        <option value="12hours">Past 12 Hours</option>
                        <option value="24hours">Past 24 Hours</option>
                        <option value="week">Past Week</option>
                        <option value="30days">Past 30 days</option>
                        <option value="year">Past Year</option>
                        <option value='custom_range'>Custom Range</option>
                    </select>
                </td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <input id="search-button" type="submit" value="Search">
                </td>
            </tr>
            <tr id='customRangeSection_10'>
                <td>&nbsp;&nbsp;&nbsp;
                <td>
            </tr>
            <tr>
                <td id='customRangeSection_1' colspan='3'>
                    <table>
                        <tr>
                            <td id='customRangeSection_2'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td>
                                <table>
                                    <tr>
                                        <td id='customRangeSection_3'>Start Date</td>
                                        <td>&nbsp;&nbsp;</td>
                                        <td id='customRangeSection_4'>
                                            <input id='startDate' placeholder='10-01-2011' type="text">
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td>
                                <table>
                                    <tr>
                                        <td id='customRangeSection_5'>End Date</td>
                                        <td>&nbsp;&nbsp;</td>
                                        <td id='customRangeSection_6'>
                                            <input id='endDate' placeholder='03-22-2014' type="text">
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td id='customRangeSection_7' colspan='2'>
                    <table>
                        <tr>
                            <td id='customRangeSection_8'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td id='customRangeSection_9'>* use mm-dd-yyyy format</td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td colspan='3' align='right'>
                    <a id="showFiltersLink" href="javascript:showSearchFilters();">Show Advanced Search</a>
                    <a id="hideFiltersLink" href="javascript:hideSearchFilters();">Hide Advanced Search</a>
                </td>
            </tr>
        </table>
    </div>
    <div id="showErrorsContainer">
        <div class="showErrors"></div>
    </div>
    <div id="searchFiltersDisplay">
        <table>
            <tr>
                <td>&nbsp;&nbsp;&nbsp;</td>
                <td>Keywords
                </td>
                <td>&nbsp;&nbsp;&nbsp;</td>
                <td>Radius
                </td>
                <td>&nbsp;&nbsp;&nbsp;</td>
                <td>Channels to Search On
                </td>
                <td>&nbsp;&nbsp;&nbsp;</td>
                <td>
                </td>
            </tr>
            <tr>
                <td>&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <input id='query' value='' type="text" placeholder=' e.g. fire, explosion'
                           title='Enter keywords here to narrow the search results further'>
                </td>
                <td>&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select id='locRadius' title='Enter the location radius to search on'>
                        <option value="">None</option>
                        <option value="1km">1km</option>
                        <option value="10km" selected="selected">10km</option>
                        <option value="50km">50km</option>
                        <option value="100km">100km</option>
                        <option value="500km">500km</option>
                        <option value="1000km">1000km</option>
                    </select>
                </td>
                <td>&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <input id='channelList' value='' type="text" width="100"
                           title='Enter comma separated list of channels to search exclusively on'>
                </td>
                <td>&nbsp;&nbsp;&nbsp;</td>
                <td>
                </td>
            </tr>
        </table>
        <table>
            <tr>
                <td>&nbsp;&nbsp;&nbsp;</td>
            </tr>
            <tr>
                <td>&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <div id="creativeCommonsText">
                        <input type="checkbox" id="creativeCommonsOnly" value="true"
                               title='Show only results that are under the Creative Commons liscense.'>
                        <abbr title='Show only results that are under the Creative Commons liscense.'>Creative Commons Only
                            Results</abbr></div>
                </td>
                <td>&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <input type="checkbox" id="embedOnly" value="true"'Show only results that are embeddable in other sites'>
                    <abbr title='Show only results that are embeddable in other sites'>Embeddable Only Results</abbr></td>
                <td>&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <input type="checkbox" id="liveOnly" value="true" title='Show only live stream results'>
                    <abbr title='Show only live stream results'>Live Only Results</abbr></td>
            </tr>
        </table>
    </div>
</form>
<table>
    <tr>
        <td colspan='2' align="right">
            <div id=searchResultCountContainer>
                <div id=searchResultCount></div>
            </div>
        </td>
    </tr>
    <tr>
        <td width='350'>
            <div id="video-container">
                <table id='tableOfVideoContentResults'></table>
            </div>
        </td>
        <td valign='top'>
            <div id="map-canvas"></div>
        </td>
    </tr>
</table>