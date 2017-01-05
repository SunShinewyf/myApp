/**
 * author:SunShinewyf
 * date:2017-01-02
 */
export interface Travel {
    travel_id: number,
    user_id: number,
    spot_id,
    title: string,
    content: string,
    date: any,
    zan_num: number,
    share_num: number,
    comment_num?: number
}