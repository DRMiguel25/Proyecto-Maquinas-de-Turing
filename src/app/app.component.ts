import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedModel: string = 'nondeterministic';
  config: any;
  userInput: string = '';

  onModelSelect() {
    if (this.selectedModel === 'nondeterministic') {
      this.initializeNondeterministicMachine();
    } else if (this.selectedModel === 'universal') {
      this.initializeUniversalMachine();
    }
  }

  initializeNondeterministicMachine() {
    this.config = {
      states: ['q0', 'q1', 'q2'],
      alphabet: ['0', '1'],
      initialState: 'q0',
      acceptanceStates: ['q2'],
      transitions: [
        { currentState: 'q0', readSymbol: '0', nextState: 'q1', writeSymbol: '1', moveDirection: 'R' },
        { currentState: 'q1', readSymbol: '1', nextState: 'q2', writeSymbol: '0', moveDirection: 'L' }
      ]
    };
  }

  initializeUniversalMachine() {
    this.config = {
      states: ['u0', 'u1', 'u2'],
      alphabet: ['a', 'b'],
      initialState: 'u0',
      acceptanceStates: ['u2'],
      transitions: [
        { currentState: 'u0', readSymbol: 'a', nextState: 'u1', writeSymbol: 'b', moveDirection: 'R' },
        { currentState: 'u1', readSymbol: 'b', nextState: 'u2', writeSymbol: 'a', moveDirection: 'L' }
      ]
    };
  }
}
