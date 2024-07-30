import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// event type
import { AppEvent } from '../helpers/eventType';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private handler = new Subject<AppEvent<string>>();
  constructor () { }

  /**
   * Broadcast the event
   * @param type type of event
   * @param payload payload
   */
  broadcast(type: string, payload: string = ""): void {
    this.handler.next({ type, payload });
  }

  /**
   * Subscribe to event
   * @param eventType type of event
   */
  on(eventType: string): Observable<AppEvent<string>> {
    return this.handler.pipe(filter(event => event.type === eventType));
  }
}
