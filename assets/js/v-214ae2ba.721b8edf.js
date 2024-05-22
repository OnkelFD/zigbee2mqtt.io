"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[15305],{923497:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d=JSON.parse('{"key":"v-214ae2ba","path":"/devices/BAC-003.html","title":"TuYa BAC-003 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa BAC-003 control via MQTT","description":"Integrate your TuYa BAC-003 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-02-06T19:45:39.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Deadzone temperature (numeric)","slug":"deadzone-temperature-numeric","link":"#deadzone-temperature-numeric","children":[]},{"level":3,"title":"Child lock (lock)","slug":"child-lock-lock","link":"#child-lock-lock","children":[]},{"level":3,"title":"Schedule (text)","slug":"schedule-text","link":"#schedule-text","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1716400909000},"filePathRelative":"devices/BAC-003.md"}')},127271:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var d=o(166252);const i=(0,d._)("h1",{id:"tuya-bac-003",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#tuya-bac-003","aria-hidden":"true"},"#"),(0,d.Uk)(" TuYa BAC-003")],-1),a=(0,d._)("thead",null,[(0,d._)("tr",null,[(0,d._)("th"),(0,d._)("th")])],-1),c=(0,d._)("tr",null,[(0,d._)("td",null,"Model"),(0,d._)("td",null,"BAC-003")],-1),l=(0,d._)("td",null,"Vendor",-1),s=(0,d._)("tr",null,[(0,d._)("td",null,"Description"),(0,d._)("td",null,"FCU thermostat temperature controller")],-1),n=(0,d._)("tr",null,[(0,d._)("td",null,"Exposes"),(0,d._)("td",null,"climate (local_temperature, system_mode, fan_mode, current_heating_setpoint, preset, local_temperature_calibration), deadzone_temperature, lock (state), schedule, linkquality")],-1),r=(0,d._)("tr",null,[(0,d._)("td",null,"Picture"),(0,d._)("td",null,[(0,d._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/BAC-003.png",alt:"TuYa BAC-003"})])],-1),u=(0,d.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>local_temperature</code>, <code>system_mode</code>, <code>fan_mode</code>, <code>current_heating_setpoint</code>, <code>preset</code>, <code>local_temperature_calibration</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>35</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>cool</code>, <code>heat</code>, <code>fan_only</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>auto</code>, <code>manual</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-3</code> and the maximum value is <code>3</code> with a step size of <code>1</code>.</li></ul><h3 id="deadzone-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#deadzone-temperature-numeric" aria-hidden="true">#</a> Deadzone temperature (numeric)</h3><p>The delta between local_temperature and current_heating_setpoint to trigger activity. Value can be found in the published state on the <code>deadzone_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;deadzone_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>5</code>. The unit of this value is <code>°C</code>. Besides the numeric values the following values are accepted: <code>default</code>.</p><h3 id="child-lock-lock" tabindex="-1"><a class="header-anchor" href="#child-lock-lock" aria-hidden="true">#</a> Child lock (lock)</h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="schedule-text" tabindex="-1"><a class="header-anchor" href="#schedule-text" aria-hidden="true">#</a> Schedule (text)</h3><p>Schedule will work with &quot;auto&quot; preset. In this mode, the device executes a preset week programming temperature time and temperature. Schedule can contains 12 segments. All 12 segments should be defined. It should be defined in the following format: &quot;hh:mm/tt&quot;. Segments should be divided by space symbol. Example: &quot;06:00/20 11:30/21 13:30/22 17:30/23 06:00/24 12:00/23 14:30/22 17:30/21 06:00/19 12:30/20 14:30/21 18:30/20&quot;. Value can be found in the published state on the <code>schedule</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule&quot;: NEW_VALUE}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),h={},p=(0,o(983744).Z)(h,[["render",function(e,t){const o=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d.kq)(" !!!! "),(0,d.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,d.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,d.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,d.kq)(" !!!! "),i,(0,d._)("table",null,[a,(0,d._)("tbody",null,[c,(0,d._)("tr",null,[l,(0,d._)("td",null,[(0,d.Wm)(o,{to:"/supported-devices/#v=TuYa"},{default:(0,d.w5)((()=>[(0,d.Uk)("TuYa")])),_:1})])]),s,n,r])]),(0,d.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,d.kq)(" Notes END: Do not edit below this line "),u])}]])}}]);