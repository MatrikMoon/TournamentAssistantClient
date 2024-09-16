// @generated by protobuf-ts 2.8.2
// @generated from protobuf file "pushes.proto" (package "proto.packets", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Beatmap } from './models.js';
import { User } from './models.js';
import { RealtimeScore } from './models.js';
/**
 * ---- Pushes (SUBMIT something!) ---- //
 *
 * @generated from protobuf message proto.packets.Push
 */
export interface Push {
    /**
     * @generated from protobuf oneof: data
     */
    data: {
        oneofKind: "realtimeScore";
        /**
         * @generated from protobuf field: proto.models.RealtimeScore realtime_score = 1;
         */
        realtimeScore: RealtimeScore;
    } | {
        oneofKind: "songFinished";
        /**
         * @generated from protobuf field: proto.packets.Push.SongFinished song_finished = 2;
         */
        songFinished: Push_SongFinished;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message proto.packets.Push.SongFinished
 */
export interface Push_SongFinished {
    /**
     * @generated from protobuf field: proto.models.User player = 1;
     */
    player?: User;
    /**
     * @generated from protobuf field: proto.models.Beatmap beatmap = 2;
     */
    beatmap?: Beatmap;
    /**
     * @generated from protobuf field: proto.packets.Push.SongFinished.CompletionType type = 3;
     */
    type: Push_SongFinished_CompletionType;
    /**
     * @generated from protobuf field: int32 score = 4;
     */
    score: number;
    /**
     * @generated from protobuf field: int32 misses = 5;
     */
    misses: number;
    /**
     * @generated from protobuf field: int32 bad_cuts = 6;
     */
    badCuts: number;
    /**
     * @generated from protobuf field: int32 good_cuts = 7;
     */
    goodCuts: number;
    /**
     * @generated from protobuf field: float end_time = 8;
     */
    endTime: number;
    /**
     * @generated from protobuf field: string tournament_id = 9;
     */
    tournamentId: string;
    /**
     * @generated from protobuf field: string match_id = 10;
     */
    matchId: string;
}
/**
 * @generated from protobuf enum proto.packets.Push.SongFinished.CompletionType
 */
export enum Push_SongFinished_CompletionType {
    /**
     * @generated from protobuf enum value: Passed = 0;
     */
    Passed = 0,
    /**
     * @generated from protobuf enum value: Failed = 1;
     */
    Failed = 1,
    /**
     * @generated from protobuf enum value: Quit = 2;
     */
    Quit = 2
}
// @generated message type with reflection information, may provide speed optimized methods
class Push$Type extends MessageType<Push> {
    constructor() {
        super("proto.packets.Push", [
            { no: 1, name: "realtime_score", kind: "message", oneof: "data", T: () => RealtimeScore },
            { no: 2, name: "song_finished", kind: "message", oneof: "data", T: () => Push_SongFinished }
        ]);
    }
    create(value?: PartialMessage<Push>): Push {
        const message = { data: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Push>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Push): Push {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* proto.models.RealtimeScore realtime_score */ 1:
                    message.data = {
                        oneofKind: "realtimeScore",
                        realtimeScore: RealtimeScore.internalBinaryRead(reader, reader.uint32(), options, (message.data as any).realtimeScore)
                    };
                    break;
                case /* proto.packets.Push.SongFinished song_finished */ 2:
                    message.data = {
                        oneofKind: "songFinished",
                        songFinished: Push_SongFinished.internalBinaryRead(reader, reader.uint32(), options, (message.data as any).songFinished)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Push, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* proto.models.RealtimeScore realtime_score = 1; */
        if (message.data.oneofKind === "realtimeScore")
            RealtimeScore.internalBinaryWrite(message.data.realtimeScore, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* proto.packets.Push.SongFinished song_finished = 2; */
        if (message.data.oneofKind === "songFinished")
            Push_SongFinished.internalBinaryWrite(message.data.songFinished, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.packets.Push
 */
export const Push = new Push$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Push_SongFinished$Type extends MessageType<Push_SongFinished> {
    constructor() {
        super("proto.packets.Push.SongFinished", [
            { no: 1, name: "player", kind: "message", T: () => User },
            { no: 2, name: "beatmap", kind: "message", T: () => Beatmap },
            { no: 3, name: "type", kind: "enum", T: () => ["proto.packets.Push.SongFinished.CompletionType", Push_SongFinished_CompletionType] },
            { no: 4, name: "score", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "misses", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "bad_cuts", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "good_cuts", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "end_time", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 9, name: "tournament_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "match_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Push_SongFinished>): Push_SongFinished {
        const message = { type: 0, score: 0, misses: 0, badCuts: 0, goodCuts: 0, endTime: 0, tournamentId: "", matchId: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Push_SongFinished>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Push_SongFinished): Push_SongFinished {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* proto.models.User player */ 1:
                    message.player = User.internalBinaryRead(reader, reader.uint32(), options, message.player);
                    break;
                case /* proto.models.Beatmap beatmap */ 2:
                    message.beatmap = Beatmap.internalBinaryRead(reader, reader.uint32(), options, message.beatmap);
                    break;
                case /* proto.packets.Push.SongFinished.CompletionType type */ 3:
                    message.type = reader.int32();
                    break;
                case /* int32 score */ 4:
                    message.score = reader.int32();
                    break;
                case /* int32 misses */ 5:
                    message.misses = reader.int32();
                    break;
                case /* int32 bad_cuts */ 6:
                    message.badCuts = reader.int32();
                    break;
                case /* int32 good_cuts */ 7:
                    message.goodCuts = reader.int32();
                    break;
                case /* float end_time */ 8:
                    message.endTime = reader.float();
                    break;
                case /* string tournament_id */ 9:
                    message.tournamentId = reader.string();
                    break;
                case /* string match_id */ 10:
                    message.matchId = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Push_SongFinished, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* proto.models.User player = 1; */
        if (message.player)
            User.internalBinaryWrite(message.player, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* proto.models.Beatmap beatmap = 2; */
        if (message.beatmap)
            Beatmap.internalBinaryWrite(message.beatmap, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* proto.packets.Push.SongFinished.CompletionType type = 3; */
        if (message.type !== 0)
            writer.tag(3, WireType.Varint).int32(message.type);
        /* int32 score = 4; */
        if (message.score !== 0)
            writer.tag(4, WireType.Varint).int32(message.score);
        /* int32 misses = 5; */
        if (message.misses !== 0)
            writer.tag(5, WireType.Varint).int32(message.misses);
        /* int32 bad_cuts = 6; */
        if (message.badCuts !== 0)
            writer.tag(6, WireType.Varint).int32(message.badCuts);
        /* int32 good_cuts = 7; */
        if (message.goodCuts !== 0)
            writer.tag(7, WireType.Varint).int32(message.goodCuts);
        /* float end_time = 8; */
        if (message.endTime !== 0)
            writer.tag(8, WireType.Bit32).float(message.endTime);
        /* string tournament_id = 9; */
        if (message.tournamentId !== "")
            writer.tag(9, WireType.LengthDelimited).string(message.tournamentId);
        /* string match_id = 10; */
        if (message.matchId !== "")
            writer.tag(10, WireType.LengthDelimited).string(message.matchId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.packets.Push.SongFinished
 */
export const Push_SongFinished = new Push_SongFinished$Type();
