"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[35369],{427629:(e,i,t)=>{t.r(i),t.d(i,{data:()=>n});const n=JSON.parse('{"key":"v-758dbf58","path":"/devices/CTL-R1-TY-Zigbee.html","title":"TuYa CTL-R1-TY-Zigbee control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa CTL-R1-TY-Zigbee control via MQTT","description":"Integrate your TuYa CTL-R1-TY-Zigbee via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-11-01T18:54:40.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Presence (binary)","slug":"presence-binary","link":"#presence-binary","children":[]},{"level":3,"title":"Presence sensitivity (numeric)","slug":"presence-sensitivity-numeric","link":"#presence-sensitivity-numeric","children":[]},{"level":3,"title":"Detection range (numeric)","slug":"detection-range-numeric","link":"#detection-range-numeric","children":[]},{"level":3,"title":"Detection delay (numeric)","slug":"detection-delay-numeric","link":"#detection-delay-numeric","children":[]},{"level":3,"title":"Illuminance treshold max (numeric)","slug":"illuminance-treshold-max-numeric","link":"#illuminance-treshold-max-numeric","children":[]},{"level":3,"title":"Illuminance treshold min (numeric)","slug":"illuminance-treshold-min-numeric","link":"#illuminance-treshold-min-numeric","children":[]},{"level":3,"title":"Presence illuminance switch (binary)","slug":"presence-illuminance-switch-binary","link":"#presence-illuminance-switch-binary","children":[]},{"level":3,"title":"Light switch (binary)","slug":"light-switch-binary","link":"#light-switch-binary","children":[]},{"level":3,"title":"Light linkage (binary)","slug":"light-linkage-binary","link":"#light-linkage-binary","children":[]},{"level":3,"title":"Detection method (enum)","slug":"detection-method-enum","link":"#detection-method-enum","children":[]},{"level":3,"title":"Indicator light (enum)","slug":"indicator-light-enum","link":"#indicator-light-enum","children":[]},{"level":3,"title":"Identify (binary)","slug":"identify-binary","link":"#identify-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1716400909000},"filePathRelative":"devices/CTL-R1-TY-Zigbee.md"}')},511501:(e,i,t)=>{t.r(i),t.d(i,{default:()=>p});var n=t(166252);const o=(0,n._)("h1",{id:"tuya-ctl-r1-ty-zigbee",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#tuya-ctl-r1-ty-zigbee","aria-hidden":"true"},"#"),(0,n.Uk)(" TuYa CTL-R1-TY-Zigbee")],-1),a=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),l=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"CTL-R1-TY-Zigbee")],-1),d=(0,n._)("td",null,"Vendor",-1),c=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"24G radar human presence motion sensor.")],-1),s=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"illuminance, presence, presence_sensitivity, detection_range, detection_delay, illuminance_treshold_max, illuminance_treshold_min, presence_illuminance_switch, light_switch, light_linkage, detection_method, indicator_light, identify, linkquality")],-1),r=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/CTL-R1-TY-Zigbee.png",alt:"TuYa CTL-R1-TY-Zigbee"})])],-1),h=(0,n._)("h2",{id:"options",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,n.Uk)(" Options")],-1),u=(0,n.uE)('<ul><li><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary" aria-hidden="true">#</a> Presence (binary)</h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="presence-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#presence-sensitivity-numeric" aria-hidden="true">#</a> Presence sensitivity (numeric)</h3><p>Presence sensitivity. Value can be found in the published state on the <code>presence_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;presence_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="detection-range-numeric" tabindex="-1"><a class="header-anchor" href="#detection-range-numeric" aria-hidden="true">#</a> Detection range (numeric)</h3><p>Detection range. Value can be found in the published state on the <code>detection_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detection_range&quot;: NEW_VALUE}</code>. The minimal value is <code>1.5</code> and the maximum value is <code>4.5</code>. The unit of this value is <code>m</code>.</p><h3 id="detection-delay-numeric" tabindex="-1"><a class="header-anchor" href="#detection-delay-numeric" aria-hidden="true">#</a> Detection delay (numeric)</h3><p>Presence detection delay. Value can be found in the published state on the <code>detection_delay</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detection_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>600</code>. The unit of this value is <code>s</code>.</p><h3 id="illuminance-treshold-max-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-treshold-max-numeric" aria-hidden="true">#</a> Illuminance treshold max (numeric)</h3><p>The max illumiance threshold to turn on the light. Value can be found in the published state on the <code>illuminance_treshold_max</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;illuminance_treshold_max&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>2000</code>. The unit of this value is <code>lx</code>.</p><h3 id="illuminance-treshold-min-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-treshold-min-numeric" aria-hidden="true">#</a> Illuminance treshold min (numeric)</h3><p>The min illumiance threshold to turn on the light. Value can be found in the published state on the <code>illuminance_treshold_min</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;illuminance_treshold_min&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>2000</code>. The unit of this value is <code>lx</code>.</p><h3 id="presence-illuminance-switch-binary" tabindex="-1"><a class="header-anchor" href="#presence-illuminance-switch-binary" aria-hidden="true">#</a> Presence illuminance switch (binary)</h3><p>Whether to enable &#39;light_switch&#39; illumination is between min/max threshold. Value can be found in the published state on the <code>presence_illuminance_switch</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;presence_illuminance_switch&quot;: NEW_VALUE}</code>. If value equals <code>true</code> presence illuminance switch is ON, if <code>false</code> OFF.</p><h3 id="light-switch-binary" tabindex="-1"><a class="header-anchor" href="#light-switch-binary" aria-hidden="true">#</a> Light switch (binary)</h3><p>This state will determine the light on/off based on the lighting threshold and presence sensing. Value can be found in the published state on the <code>light_switch</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>ON</code> light switch is ON, if <code>OFF</code> OFF.</p><h3 id="light-linkage-binary" tabindex="-1"><a class="header-anchor" href="#light-linkage-binary" aria-hidden="true">#</a> Light linkage (binary)</h3><p>Light linkage. Value can be found in the published state on the <code>light_linkage</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;light_linkage&quot;: NEW_VALUE}</code>. If value equals <code>true</code> light linkage is ON, if <code>false</code> OFF.</p><h3 id="detection-method-enum" tabindex="-1"><a class="header-anchor" href="#detection-method-enum" aria-hidden="true">#</a> Detection method (enum)</h3><p>When &#39;only_move&#39; is used, presence will only be triggered when there is movement. Value can be found in the published state on the <code>detection_method</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detection_method&quot;: NEW_VALUE}</code>. The possible values are: <code>only_move</code>, <code>exist_move</code>.</p><h3 id="indicator-light-enum" tabindex="-1"><a class="header-anchor" href="#indicator-light-enum" aria-hidden="true">#</a> Indicator light (enum)</h3><p>Controls when the indicator light is turned on. Value can be found in the published state on the <code>indicator_light</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator_light&quot;: NEW_VALUE}</code>. The possible values are: <code>presence</code>, <code>off</code>, <code>on</code>.</p><h3 id="identify-binary" tabindex="-1"><a class="header-anchor" href="#identify-binary" aria-hidden="true">#</a> Identify (binary)</h3><p>After turning on, the indicator light quickly flashes, used to locate devices. Value can be found in the published state on the <code>identify</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. If value equals <code>true</code> identify is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',30),m={},p=(0,t(983744).Z)(m,[["render",function(e,i){const t=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),o,(0,n._)("table",null,[a,(0,n._)("tbody",null,[l,(0,n._)("tr",null,[d,(0,n._)("td",null,[(0,n.Wm)(t,{to:"/supported-devices/#v=TuYa"},{default:(0,n.w5)((()=>[(0,n.Uk)("TuYa")])),_:1})])]),c,s,r])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,n.kq)(" Notes END: Do not edit below this line "),h,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[(0,n.Uk)("How to use device type specific configuration")])),_:1})])]),u])}]])}}]);