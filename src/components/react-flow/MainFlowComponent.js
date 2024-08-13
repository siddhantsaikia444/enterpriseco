import React, { useState, useCallback } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
  Handle,
} from 'react-flow-renderer';

const initialNodes = [
  {
    id: '1',
    type: 'custom',
    data: { label: 'Double click me to Edit ', isEditing: false, color: 'white' },
    position: { x: 100, y: 100 },
  },
  {
    id: '2',
    type: 'custom',
    data: { label: 'Drag me ', isEditing: false, color: 'white' },
    position: { x: 400, y: 100 },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', animated: true },
];

const CustomNode = ({ data }) => {
  const [text, setText] = useState(data.label);
  const [isEditing, setIsEditing] = useState(data.isEditing);
  const [color, setColor] = useState(data.color);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    setColor('lightblue');
  };

  return (
    <div style={{ padding: 10, backgroundColor: color, border: '1px solid black', borderRadius: 5 }}>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div onDoubleClick={() => setIsEditing(true)}>{text}</div>
      )}
      <Handle type="source" position="right" style={{ background: '#555' }} />
      <Handle type="target" position="left" style={{ background: '#555' }} />
    </div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

const MainFlowComponent = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)), []);

  return (
    <div style={{ height: 500 }}>
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          nodeTypes={nodeTypes}
        >
          <MiniMap />
          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default MainFlowComponent;
