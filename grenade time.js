/*
*
* Customer: L1mPeX
*
*/

//region api
const global = [], globals = [], sound = [], cheat = [], local = [], world = [], input = [], render = [], ui = [], convar = [], event = [], entity = [], trace = [], usercmd = [], antiaim = [], exploit = [], ragebot = [], material = []; global.print = Global.Print, global.print_chat = Global.PrintChat, global.print_color = Global.PrintColor, global.register_callback = Global.RegisterCallback, global.execute_command = Global.ExecuteCommand, global.frame_stage = Global.FrameStage, global.tickcount = Global.Tickcount, global.tickrate = Global.Tickrate, global.tick_interval = Global.TickInterval, global.curtime = Global.Curtime, global.realtime = Global.Realtime, global.frametime = Global.Frametime, global.latency = Global.Latency, global.get_view_angles = Global.GetViewAngles, global.set_view_angles = Global.SetViewAngles, global.get_map_name = Global.GetMapName, global.is_key_pressed = Global.IsKeyPressed, global.get_screen_size = Global.GetScreenSize, global.get_cursor_position = Global.GetCursorPosition, global.play_sound = Global.PlaySound, global.play_microphone = Global.PlayMicrophone, global.stop_microphone = Global.StopMicrophone, global.get_username = Global.GetUsername, global.set_clan_tag = Global.SetClanTag, globals.tickcount = Globals.Tickcount, globals.tickrate = Globals.Tickrate, globals.tick_interval = Globals.TickInterval, globals.curtime = Globals.Curtime, globals.realtime = Globals.Realtime, globals.frametime = Globals.Frametime, sound.play = Sound.Play, sound.play_microphone = Sound.PlayMicrophone, sound.stop_microphone = Sound.StopMicrophone, cheat.get_username = Cheat.GetUsername, cheat.register_callback = function(c, f) { switch (c) { case 'create_move': Cheat.RegisterCallback("CreateMove", f); break; case 'paint': Cheat.RegisterCallback("Draw", f); break; case 'fsn': Cheat.RegisterCallback("FrameStageNotify", f); break; case 'shutdown': Cheat.RegisterCallback("Unload", f); break; default: Cheat.RegisterCallback(c, f); break; } }, cheat.execute_command = Cheat.ExecuteCommand, cheat.frame_stage = Cheat.FrameStage, cheat.print = Cheat.Print, cheat.print_chat = Cheat.PrintChat, cheat.print_color = Cheat.PrintColor, local.latency = Local.Latency, local.get_view_angles = Local.GetViewAngles, local.set_view_angles = Local.SetViewAngles, local.set_clan_tag = Local.SetClanTag, local.get_real_yaw = Local.GetRealYaw, local.get_fake_yaw = Local.GetFakeYaw, local.get_spread = Local.GetSpread, local.get_inaccuracy = Local.GetInaccuracy, world.get_map_name = World.GetMapName, world.get_server_string = World.GetServerString, input.get_cursor_position = Input.GetCursorPosition, input.is_key_pressed = Input.IsKeyPressed, render.string = Render.String, render.text_size = Render.TextSize, render.line = Render.Line, render.rect = Render.Rect, render.filled_rect = Render.FilledRect, render.gradient_rect = Render.GradientRect, render.circle = Render.Circle, render.filled_circle = Render.FilledCircle, render.polygon = Render.Polygon, render.world_to_screen = Render.WorldToScreen, render.add_font = Render.AddFont, render.find_font = Render.FindFont, render.string_custom = Render.StringCustom, render.textured_rect = Render.TexturedRect, render.add_texture = Render.AddTexture, render.text_size_custom = Render.TextSizeCustom, render.get_screen_size = Render.GetScreenSize, ui.get_value = UI.GetValue, ui.set_value = UI.SetValue, ui.add_checkbox = UI.AddCheckbox, ui.add_slider_int = UI.AddSliderInt, ui.add_slider_float = UI.AddSliderFloat, ui.add_hotkey = UI.AddHotkey, ui.add_label = UI.AddLabel, ui.add_dropdown = UI.AddDropdown, ui.add_multi_dropdown = UI.AddMultiDropdown, ui.add_color_picker = UI.AddColorPicker, ui.add_textbox = UI.AddTextbox, ui.set_enabled = UI.SetEnabled, ui.get_string = UI.GetString, ui.get_color = UI.GetColor, ui.set_color = UI.SetColor, ui.is_hotkey_active = UI.IsHotkeyActive, ui.toggle_hotkey = UI.ToggleHotkey, ui.is_menu_open = UI.IsMenuOpen, convar.get_int = Convar.GetInt, convar.set_int = Convar.SetInt, convar.get_float = Convar.GetFloat, convar.set_float = Convar.SetFloat, convar.get_string = Convar.GetString, convar.set_string = Convar.SetString, event.get_int = Event.GetInt, event.get_float = Event.GetFloat, event.get_string = Event.GetString, entity.get_entities = Entity.GetEntities, entity.get_entities_by_class_i_d = Entity.GetEntitiesByClassID, entity.get_players = Entity.GetPlayers, entity.get_enemies = Entity.GetEnemies, entity.get_teammates = Entity.GetTeammates, entity.get_local_player = Entity.GetLocalPlayer, entity.get_game_rules_proxy = Entity.GetGameRulesProxy, entity.get_entity_from_user_i_d = Entity.GetEntityFromUserID, entity.is_teammate = Entity.IsTeammate, entity.is_enemy = Entity.IsEnemy, entity.is_bot = Entity.IsBot, entity.is_local_player = Entity.IsLocalPlayer, entity.is_valid = Entity.IsValid, entity.is_alive = Entity.IsAlive, entity.is_dormant = Entity.IsDormant, entity.get_class_i_d = Entity.GetClassID, entity.get_class_name = Entity.GetClassName, entity.get_name = Entity.GetName, entity.get_weapon = Entity.GetWeapon, entity.get_weapons = Entity.GetWeapons, entity.get_render_origin = Entity.GetRenderOrigin, entity.get_render_box = Entity.GetRenderBox, entity.get_prop = Entity.GetProp, entity.set_prop = Entity.SetProp, entity.get_hitbox_position = Entity.GetHitboxPosition, entity.get_eye_position = Entity.GetEyePosition, trace.line = Trace.Line, trace.bullet = Trace.Bullet, usercmd.set_movement = UserCMD.SetMovement, usercmd.get_movement = UserCMD.GetMovement, usercmd.set_angles = UserCMD.SetAngles, usercmd.force_jump = UserCMD.ForceJump, usercmd.force_crouch = UserCMD.ForceCrouch, antiaim.get_override = AntiAim.GetOverride, antiaim.set_override = AntiAim.SetOverride, antiaim.set_real_offset = AntiAim.SetRealOffset, antiaim.set_fake_offset = AntiAim.SetFakeOffset, antiaim.set_l_b_y_offset = AntiAim.SetLBYOffset, exploit.get_charge = Exploit.GetCharge, exploit.recharge = Exploit.Recharge, exploit.disable_recharge = Exploit.DisableRecharge, exploit.enable_recharge = Exploit.EnableRecharge, ragebot.get_target = Ragebot.GetTarget, ragebot.ignore_target = Ragebot.IgnoreTarget, ragebot.force_target = Ragebot.ForceTarget, ragebot.force_target_safety = Ragebot.ForceTargetSafety, ragebot.force_target_hitchance = Ragebot.ForceTargetHitchance, ragebot.force_target_minimum_damage = Ragebot.ForceTargetMinimumDamage, ragebot.force_hitbox_safety = Ragebot.ForceHitboxSafety, material.create = Material.Create, material.destroy = Material.Destroy, material.get = Material.Get, material.set_key_value = Material.SetKeyValue, material.refresh = Material.Refresh
//endregion

//region dependencies

/**
 * @title L1mUI
 * @version 0.0.1
 * @description A better UI system for Onetap
 */

var menu = {
    _class: 'L1mUI'
};
const menu_spacer = "                                                                                  ";

/**
 * Concats two elements into an array without increasing the array length.
 * Prevents the memory leak in 2.0.0 from happening
 * 
 * @param a {array}
 * @param b {any}
 */
menu.concat = function(a, b)
{
    // Creates a new array.
    var arr = [];

    // Push all items from the array 'a' into our array.
    for (var c in a)
    {
        arr.push(a[c]);
    }

    // Push the value 'b' into our array.
    arr.push(b);

    // Return the new array.
    return arr;
}

/**
 * Creates a new menu label
 *
 * @param label {string}
 */
menu.label = function(label)
{
    // Creates the label
    UI.AddLabel(label);
};

/**
 * Creates a new menu element
 *
 * @param func {function}
 * @param name {string}
 * @param label {string},
 * @param properties {array}
 */
menu.call = function(func, name, label, properties)
{
    // Get properties
    const final_name = name + menu_spacer + label;
    var final_props = [final_name];
    const element_info_t = {
        path: ["Misc", "JAVASCRIPT", "Script Items", final_name]
    };

    // If our properties aren't null, then pack them together.
    if (properties != null)
    {
        for (var i = 0; i < properties.length; i++)
        {
            final_props.push(properties[i]);
        }
    }

    // Create our menu element and return properties
    func.apply(null, final_props);
    return element_info_t;
};

/**
 * Creates a new menu reference
 *
 * @param path {array}
 */
menu.reference = function(path)
{
    const element_info_t = {
        path: path
    };

    return element_info_t;
};

/**
 * Gets the value of a menu element
 *
 * @param elem {array}
 * @return {*}
 */
menu.get = function(elem)
{
    // If the element doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Returns the element's value
    return UI.GetValue.apply(null, elem.path);
};

/**
 * Gets the value of a menu element
 *
 * @param elem {array}
 * @return {*}
 */
menu.get_hotkey = function(elem)
{
    // If the label doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Returns the element's value
    return UI.IsHotkeyActive.apply(null, elem.path);
};

/**
 * Gets the value of a menu element
 *
 * @param elem {array}
 * @return {*}
 */
menu.get_color = function(elem)
{
    // If the label doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Returns the element's value
    return UI.GetColor.apply(null, elem.path);
};

/**
 * Sets the value of a menu element
 *
 * @param elem {array}
 * @param value {*}
 */
menu.set = function(elem, value)
{
    // If the label doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Get properties
    const properties = elem;

    // Set the element's value
    UI.SetValue.apply(null, this.concat(properties.path, value));
};

/**
 * Sets the value of a color picker
 *
 * @param elem {array}
 * @param color {array|Color}
 */
menu.set_color = function(elem, color)
{
    // If the label doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Get properties
    const properties = elem;

    // Set the element's value
    UI.SetColor.apply(null, this.concat(properties.path, color));
};

/**
 * Toggles a hotkey
 *
 * @param elem {array}
 */
menu.toggle = function(elem)
{
    // If the label doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Set the element's value
    UI.ToggleHotkey.apply(null, elem.path);
};

/**
 * Changes the visibility of a menu elements
 *
 * @param elem {array}
 * @param visible {boolean}
 */
menu.visibility = function(elem, visible)
{
    // If the label doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Get properties
    const properties = elem;

    // Change the element's visibility
    UI.SetEnabled.apply(null, this.concat(properties.path, visible));
};

const distance_in_ft = function(origin, destination)
{
    const sub = [destination[0] - origin[0], destination[1] - origin[1], destination[2] - origin[2]];
    return Math.round(Math.sqrt(sub[0] ** 2 + sub[1] ** 2 + sub[2] ** 2) / 12);
}

const clamp = function(v, f, c)
{
    return Math.min(Math.max(v, f), c);
}

render.arc = function(x, y, r1, r2, s, d, col)
{
    for (var i = s; i < s + d; i++)
    {

        const rad = i * Math.PI / 180;

        render.line(x + Math.cos(rad) * r1, y + Math.sin(rad) * r1, x + Math.cos(rad) * r2, y + Math.sin(rad) * r2, col);
    }
}

const is_inside_screen = function(vec)
{
    const screen_size = render.get_screen_size();
    return vec[0] > 0 && vec[1] > 0 && vec[0] < screen_size[0] && vec[1] < screen_size[1];
}

//endregion

//region globals

var positions = [];

//endregion

//region menu

const enable = menu.call(ui.add_checkbox, "| Grenade warning", "gw_enable", []);
const tracer = menu.call(ui.add_checkbox, "| Grenade tracer", "gw_tracer", []);
const tracer_color = menu.call(ui.add_color_picker, "| Grenade tracer color", "gw_tracer_clr", []);
const max_dst = menu.call(ui.add_slider_int, "| Maximum distance", "gw_dist", [0, 500]);

//endregion

//region main

function import_nades() 
{
    if (!(menu.get(tracer)))
        return;

    grenades = entity.get_entities_by_class_i_d(9).concat(entity.get_entities_by_class_i_d(113)).concat(entity.get_entities_by_class_i_d(100));
    for (e in grenades) 
    {

        should_pass = false;

        for (g in positions) 
        {
            if (positions[g][0] == grenades[e]) {
                should_pass = true;
                continue;
            }
        }

        if (should_pass)
            continue;

        positions.push([grenades[e], Globals.Curtime(), [entity.get_render_origin(grenades[e])], Globals.Curtime()]);
    }
}

function render_trails() 
{
    const length = 256, rate = 0.1;
    const color = menu.get_color(tracer_color);

    for (g in positions) 
    {
        if (globals.curtime() - positions[g][3] > 3 || !entity.is_valid(positions[g][0])) 
        {
            positions.shift();
            continue;
        }

        if (globals.curtime() - positions[g][1] > rate) 
        {
            if (positions[g][2].length > length) 
            {
                positions[g][2].shift();
                positions[g][1] = globals.curtime();
            }

            positions[g][2].push(entity.get_render_origin(positions[g][0]));
        }

        for (l in positions[g][2]) 
        {
            pos = render.world_to_screen(positions[g][2][l]);

            if (l > 0) 
            {
                last = render.world_to_screen(positions[g][2][l - 1]);

                render.line(pos[0] - 1, pos[1] - 1, last[0] - 1, last[1] - 1, color);
                render.line(pos[0] - 1, pos[1] + 1, last[0] - 1, last[1] + 1, color);
                render.line(pos[0] + 1, pos[1] - 1, last[0] + 1, last[1] - 1, color);
                render.line(pos[0] + 1, pos[1] + 1, last[0] + 1, last[1] + 1, color);
                render.line(pos[0], pos[1], last[0], last[1], color);
            }

            last = render.world_to_screen(positions[g][2][positions[g][2].length - 1]);
        }
    }
}

function on_paint( )
{
    if (!(menu.get(enable)) && !(menu.get(tracer)))
        return;
    
    const grenades = entity.get_entities_by_class_i_d(9).concat(entity.get_entities_by_class_i_d(113)).concat(entity.get_entities_by_class_i_d(100));

    const me = entity.get_local_player( );

    if (!me)
        return;
    
    if (!entity.is_alive(me))
    {
        const obs = entity.get_prop(me, "CBasePlayer", "m_hObserverTarget");

        if (!entity.is_valid(obs))
            return;
        
        me = obs;
    }

    const origin = entity.get_eye_position(me);

    for (var i = 0; i < grenades.length; i++)
    {
        const g = grenades[i];

        const destination = entity.get_render_origin(g);
        const distance = distance_in_ft(origin, destination);

        if (distance > menu.get(max_dst))
        {
            continue;
        }

        const screen = render.world_to_screen(destination);
        const is_he = entity.get_class_i_d(g) === 9, is_inferno = entity.get_class_i_d(g) === 100;

        const trace = Trace.Line(me, origin, destination);

        const is_safe = distance > (is_inferno ? 15 : 20) || trace[1] < 0.61;

        if (is_he && entity.get_prop(g, "CBaseCSGrenadeProjectile", "m_nExplodeEffectTickBegin"))
        {
            continue;
        }

        render.filled_circle(screen[0], screen[1] - 50, 30, !is_safe ? [225, 20, 20, 175 ] : [20, 20, 20, 175]);
        render.string(screen[0], screen[1] - 75, 1, "!", [255, 250, 175, 200], 4);
        render.string(screen[0], screen[1] - 40, 1, distance + " ft", [232, 232, 232, 200], 3);

        if (is_inferno)
        {
            const time = entity.get_prop(g, "CInferno", "m_nFireEffectTickBegin") * globals.tick_interval();
            const factor = clamp(((time + 7) - globals.curtime()) / 7, 0, 7);
            
            render.arc(screen[0], screen[1] - 50, 30, 32, -90, 360 * factor, [232, 232, 232, 200]);
        }
    }
}

//endregion

//region callbacks

cheat.register_callback("paint", "import_nades");
cheat.register_callback("paint", "render_trails");
cheat.register_callback("paint", "on_paint");

//endregion
